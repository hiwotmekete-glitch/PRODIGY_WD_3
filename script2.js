let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameOver = false;

function play(position) {

    if (board[position] !== "" || gameOver) {
        return;
    }

    board[position] = player;

    document.querySelectorAll("#board button")[position].innerHTML = player;

    checkWinner();

    if (!gameOver) {
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }

        document.getElementById("message").innerHTML =
            "Player " + player + "'s turn";
    }
}

function checkWinner() {

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let combination of wins) {

        let a = combination[0];
        let b = combination[1];
        let c = combination[2];

        if (board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]) {

            document.getElementById("message").innerHTML =
                "Player " + player + " wins!";

            gameOver = true;
            return;
        }
    }

    if (!board.includes("")) {
        document.getElementById("message").innerHTML = "It's a draw!";
        gameOver = true;
    }
}

function resetGame() {

    board = ["", "", "", "", "", "", "", "", ""];
    player = "X";
    gameOver = false;

    document.querySelectorAll("#board button").forEach(function(button) {
        button.innerHTML = "";
    });

    document.getElementById("message").innerHTML = "Player X's turn";
}