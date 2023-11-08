var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);
var image1Changed = false;

$(".img1").click(function() {
    diceAnimation(".img1");
    $(".img1").attr("src", "./dice" + randomNum1 + ".png");
    $(".dice1 p").html("Player 1 rolled " + randomNum1);
    image1Changed = true;
})

$(".img2").click(function() {
    if (!image1Changed) {
        return; // exits this function. ensures player 1 goes first
    }
    diceAnimation(".img2");
    $(".img2").attr("src", "./dice" + randomNum2 + ".png");
    $(".dice2 p").html("Player 2 rolled " + randomNum2);
    changeHeading();
})

function diceAnimation(selector) {
    document.querySelector(selector).classList.add("clicked");
    setTimeout(function() {
        document.querySelector(selector).classList.remove("clicked");
    }, 100);
}

function changeHeading() {
    if (randomNum1 > randomNum2) {
        $("h1").text("Player 1 Wins! 🏆");
        var win = new Audio("./win.mp3");
        win.play(); 
    }
    else if (randomNum1 < randomNum2) {
        $("h1").text("Player 2 Wins! 🏆");
        win = new Audio("./win.mp3");
        win.play(); 
    }
    else {
        $("h1").text("Draw Game");
        var draw = new Audio("./draw.mp3");
        draw.play(); 
    }
    $("h1").css("color","#F5E8C7");
    $(".instructions").hide();
}
