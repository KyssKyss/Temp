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
function numberToString(input, lenght) {
    //var outputString = null;
    while (input % 10 !== 0) {
        switch (input) {
            case 1: outputString = "Една";
                break;
            case 2: ""
                break;
            case 3: ""
                break;
            case 4: ""
                break;
            case 5: ""
                break;
            case 6: ""
                break;
            case 7: ""
                break;
            case 8: ""
                break;
            case 9: ""
                break;
            default:
        }

    }
}
