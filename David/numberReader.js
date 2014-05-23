<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <!--<script src="numberReader.js"></script>-->
</head>
<body>
    <script>
        var input = 0;
        // Declare main function
        (function numberReader() {
            var inputString = prompt("Въведете число от 0 до 1000");
            if (inputString === null || inputString === "") {
                return;
            }
            else {
                input = parseInt(inputString);
                if (input >= 0 && input <= 1000) {
                    // print the number
                    confirm(numberToString(input));
                }
                else {
                    // outside the bound
                    var isConfirm = confirm("Въведохте число извън посочения интервал. Искате ли да опитате отново?");
                    if (isConfirm) {
                        numberReader();
                    }
                }
            }
        })();
        // create function to write number represention on string
        function numberToString(input) {
            var outputString = "";
            var arr = ["","десет", "стотин", "хиляди"];
            while (input % 10 != 0) {
                switch (input % 10) {
                    case 0: outputString += " ";
                        break;
                    case 1: outputString += "Едно";
                        break;
                    case 2: outputString += "Две";
                        break;
                    case 3: outputString += "Три";
                        break;
                    case 4: outputString += "Четири";
                        break;
                    case 5: outputString += "Пет";
                        break;
                    case 6: outputString += "Шест";
                        break;
                    case 7: outputString += "Седем";
                        break;
                    case 8: outputString += "Осем";
                        break;
                    case 9: outputString += "Девет";
                        break;
                    default:
                }
                input = parseInt(input / 10);
                outputString += ' ';
            }
            var abc = "";
            var result = outputString.split(' ');
            for (var i = 0; i < result.length; i++) {
                abc += result[i] + arr[i];
                if (i === 1) {
                    abc += " и";
                }
                else {
                    abc += " ";
                }               
            }
            return abc;
        }
    </script>
</body>
</html>
