var currentPlayer = "O";
var numTurns = 0;
var gameOver = false;

let tester = 1;

function sucks() {
    var tester = 2;
}

sucks()
console.log(tester)


function changeCurrentPlayer() {
    console.log(currentPlayer)
    if (currentPlayer === "O") {
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }
}

function checkIfDraw() {
    numTurns += 1;

    if (numTurns === 9) {
        console.log("its a draw");
        gameOver = true;

        $("h1").text("It's a draw!");
    }
}

function checkIfCurrentPlayerHasThree(tileOne, tileTwo, tileThree) {
    if ($(tileOne).text() === currentPlayer &&
        $(tileTwo).text() === currentPlayer &&
        $(tileThree).text() === currentPlayer) {
           return true;
       } else {
           return false;
       }
}

function checkVerticalWins() {
    if (checkIfCurrentPlayerHasThree("#tile1", "#tile4", "#tile7") ||
        checkIfCurrentPlayerHasThree("#tile2", "#tile5", "#tile8") ||
        checkIfCurrentPlayerHasThree("#tile3", "#tile6", "#tile9")
       ) {
           return true;
       } else {
           return false;
       }
}

function checkHorizontalWins() {
        if (checkIfCurrentPlayerHasThree("#tile1", "#tile2", "#tile3") ||
        checkIfCurrentPlayerHasThree("#tile4", "#tile5", "#tile6") ||
        checkIfCurrentPlayerHasThree("#tile7", "#tile8", "#tile9")
       ) {
           return true;
       } else {
           return false;
       }
}

function checkDiagonalWins() {
            if (checkIfCurrentPlayerHasThree("#tile1", "#tile5", "#tile9") ||
        checkIfCurrentPlayerHasThree("#tile3", "#tile5", "#tile7")
       ) {
           return true;
       } else {
           return false;
       }
}

function checkIfCurrentPlayerWon() {
    if (checkVerticalWins() || checkHorizontalWins() || checkDiagonalWins()) {
        $("h1").text(currentPlayer + " Wins!")
        gameOver = true;
    }
}

function performLogic(buttonId, tileId) {
    $(buttonId).hide();
    $(tileId).text(currentPlayer)

    if (!gameOver) {
        checkIfCurrentPlayerWon()
    }

    checkIfDraw()

    changeCurrentPlayer();
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

