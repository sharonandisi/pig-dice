function pigDice(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
}
pigDice.prototype.current0 = 1;
pigDice.prototype.current1 = 1;
pigDice.prototype.roundScore = 0;
pigDice.prototype.finalScore = 10;
pigDice.prototype.score0 = 0;
pigDice.prototype.score1 = 0;
pigDice.prototype.rollDice = function () {
    var dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1) {
        this.roundScore += dice;
        $(".roundScoreDisplay" + this.current0).text(this.roundScore);
    } else {
        alert("You scored 1");
        this.otherPlayer();
    }
}

pigDice.prototype.hold = function () {
    $(".dice-image").hide();
    if (this.current1 === 1) {
        this.score0 += this.roundScore;
        $("#score0").text(this.score0);
    } else {
        this.globalScore2 += this.roundScore;
        $("#score0").text(this.score1);
    }
    this.winner();
}
pigDice.prototype.winner = function () {
    if (this.score0 >= this.finalScore || this.score1 >= this.finalScore) {
        $("#alert").text("Game Over");
        if (this.current1 === 1) {
            $("#alert").text("Winner: " + this.player1);
        } else {
            $("#alert").text("Winner: " + this.player2);
        }
    } else {
        this.otherPlayer();
    }
}
pigDice.prototype.otherPlayer = function () {
    $(".roundScoreDisplay" + this.current1).text(0);
    if (this.current1 === 1) {
        $("#alert").text("Current Player: " + this.player2);
        this.current1 = 2;
    } else {
    
        $("#aleert").text("Current Player: " + this.player1);
        this.current1 = 1;
    }
    this.roundScore = 0;
}

pigDice.prototype.newGame = function () {
    this.roundScore = 0;
    this.score0 = 0;
    this.score1 = 0;
    $("#current0").text(this.roundScore);
    $("#current1").text(this.roundScore);
    $("#score0").text(this.score0);
    $("#score1").text(this.score1);
    $("#alert").text(" ");
}
pigDice.prototype.initial = function () {

    $("#name0").text(this.player1);
    $("#name1").text(this.player2);
    $("#current0").text(this.player1);
    $("#current1").text(this.player2);
}


$(document).ready(function () {
    var playerOne = $("#name0").val().toUpperCase();
    var playerTwo = $("#name1").val().toUpperCase();
    game = new pigDice(playerOne, playerTwo);
    game.initial();


    $("#btnRoll").click(function () {
        game.rollDice();
    })
    $("#btnHold").click(function () {
        game.hold();
    })

});



$(window).on("load", function () {
    $("#sidebar").toggleClass("active");
    $("#menu1").toggle();

});

$("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#menu1").toggle("active");
});
