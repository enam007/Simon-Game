let buttonColours =['red','green','blue','yellow'];
let gamePattern =[];
let userClickedPattern =[];
var newLevel = 0;
var started = false;

// detect click
$(".btn").click(function(){
  userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  console.log("user\t",userClickedPattern);
  console.log(userClickedPattern.length-1)
  debugger;
  checkAnswer(userClickedPattern.length-1);
})


// function to genrate next Sequence
function nextSequence(){
  userClickedPattern=[]
var randomNumber = Math.floor(Math.random()*4)
var randomChoosenColor = buttonColours[randomNumber];

gamePattern.push(randomChoosenColor);
console.log("game\t",gamePattern);

$("#"+randomChoosenColor).animate().fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChoosenColor);

console.log(newLevel);
$("h1").text("Level "+newLevel);
newLevel++;
}

//function to animate press
function animatePress(currentColor){
  var activeButton=$("#"+currentColor);
  activeButton.addClass("pressed");
  setTimeout(function(){
    activeButton.removeClass("pressed")
  },100);
}

// function to play sound
function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

//function to check answer
function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success")
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence()
      },1000);
    }
  }
  else{
gameOver();
  }
}

// function for reseting game
function gameOver(){
  playSound("wrong");
  $('body').addClass("game-over");
  setTimeout(function(){
    $('body').removeClass("game-over")
  },200);
  $("h1").text("Game Over, Press Any Key to Restart");
  newLevel =0;
  gamePattern=[];
  started=false;
}


$(document).keypress(function(event) {
  if(!started){
    nextSequence();
  }
  started = true;




});





//
