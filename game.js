var letter=require("./letter.js");
var word=require("./word.js");
var inquirer = require('inquirer');
//var userGuess=process.argv[2].toUpperCase();

var guessesAllowed=10;
var previousBlanks;
var i=0;
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
function resetvalues(){
    guessesAllowed=10;
    previousBlanks;
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
       
        console.log("previous "+previousBlanks );
        if(i==0){
        previousBlanks=wordtoGuess.currentWordarray.length;
            console.log("i= "+i+" previousblanks "+previousBlanks);
        i++;
        }
        lookingforGuess(userInput.guess);
        
        var currentBlanks=blanks();
        console.log("currentBlanks "+currentBlanks);

        
        if(currentBlanks===0){
            console.log("CONGRATS YOU HAVE GUESSED THE WORD");
            //nextWord
        }

        else if (currentBlanks===previousBlanks){
            guessesAllowed--;
            console.log("INCORRECT");
            if(guessesAllowed!==0){
                inquire();
            }
            else{
                console.log("GAMEOVER")
                //SET GUESSES ALLOWED TO TEN
                resetvalues()
            }
        }
        else if (currentBlanks<previousBlanks){
            console.log("CORRECT");
            inquire();
            
        }
        previousBlanks=currentBlanks;
        console.log("previous"+previousBlanks);
    } );
}
