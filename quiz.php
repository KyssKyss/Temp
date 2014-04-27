<html>
<head>
   <meta charset="UTF-8" />
<style type='text/css'>
#wrapper {
	
	width:950px;
	 height:auto;
	 padding: 13px;
	 margin-right:auto;
	 margin-left:auto;
	 background-color:#fff;
         font-family: "Times New Roman";
	
}
</style>
</head>

<body bgcolor='#e1e1e1'>

<?php
	function import(){
		/*--------- Връзка към БД ----------*/
            $dbUser = "root";
            $dbName = "quiztest";
            $dbHost = "localhost";
           $conn = mysql_connect($dbHost, $dbUser);
           mysql_select_db($dbName);
           mysql_set_charset("UTF8",$conn);
		/*--------------------------------------*/
		/*----------Изграждане на теста --------*/
           $points = 0;
           $ch = array('А','Б','В','Г','Д','Е');
		/*------- Изграждане на въпросите ---------*/
           $questString = "SELECT * FROM `questions` ORDER BY RAND()";
           $questQuery = mysql_query($questString);           
           while ($questionRow = mysql_fetch_array($questQuery)){
           echo "<li>";    
           echo "<h3> {$questionRow['QuestionText']}?</h3>";
		   $id = $questionRow['QuestionID'];		   
		   $num = 0;
		/*-------- Изграждане на отговорите -------*/
			if($questionRow['isField'])
			echo "<input type='text' name='answer$id' /><br />";
            $answerString = "SELECT * FROM `answers` WHERE `QuestionID` = $id ORDER BY RAND()";
            $answerQuery = mysql_query($answerString);               
           while ($answerRow = mysql_fetch_array($answerQuery)) {               
			echo (
            "<div>
            <input type='radio' name='answer$id' id='answer$ch[$num]$id' value='{$answerRow['AnswerText']}' />
            <label for='answer$ch[$num]$id' >$ch[$num]) {$answerRow['AnswerText']}</label> \n
            </div>");
            $num += 1;
            }
		/*---------- Проверка --------------------*/
            if (isset($_POST['submit'])) {
            if (!empty($_POST["answer$id"])) {
            if ($_POST["answer$id"] == $questionRow['TheAnswer']) { $points += 1; echo "You got the right answer!"; }
            else {
                echo "Wrong answer!";
            }
            }
            else { echo "Please choose a answer"; }
             
            }
           echo '</li>';
                           }
           if (isset($_POST['submit'])) echo "<br />$points \n";
        }
?>

<div id='wrapper'>

<center><font size='5'>PHP Quiz App. by <b> T340</b></font></center>
<br />
<br /><br />
<?php
	echo "<form method='post' id='quizForm'><ol>";
         import();
        echo"<br /><input type='submit' name='submit' />";	 
        echo"</ol></form>";
        
?>
</div>
</body>
</html>
