var letter=require("./letter.js");
var word=require("./word.js");
var inquirer = require('inquirer');
//var userGuess=process.argv[2].toUpperCase();

var guessesAllowed=10;
var wordtoGuess = new word("fleeer");

//first run displaying
function firstDisplay(){
    wordtoGuess.isGuesscorrect(1);
    var startDisplay=wordtoGuess.displayWord();
    console.log(startDisplay);
}
  
//following rounds
function lookingforGuess(userGuess){
    wordtoGuess.isGuesscorrect(userGuess.toUpperCase());    
    var consecutiveDisplays=wordtoGuess.displayWord();
    console.log(consecutiveDisplays);
}
function blanks(){
    var currentBlanks=0;
    for(var i=0;i<wordtoGuess.currentWordarray.length;i++){
        if(wordtoGuess.currentWordarray[i]==="_"){
            currentBlanks++;
        }
    }
        return currentBlanks;
}

//DISPLAY BLANG BEFORE GESSING
firstDisplay();
inquire();


function inquire(){
    inquirer.prompt([
        {
          type: "input",
          name: "guess",
          message: "Guess a Letter!"
        }
    ]).then(function(userInput) {
        var numberoftries=10;
        var previousBlanks=blanks();
        console.log("intial Blanks "+previousBlanks);
        lookingforGuess(userInput.guess);
        var currentBlanks=blanks();
        console.log("currentBlanks "+currentBlanks);

        if(currentBlanks<previousBlanks){
            console.log("CORRECT");
        }
        if(currentBlanks===previousBlanks){
            numberoftries--;
            console.log("INCORRECT");
        }
        if(currentBlanks===0){
            console.log("CONGRATS YOU HAVE GUESSED THE WORD");
        }
        
    } );
}
