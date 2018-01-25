var letter=require("./letter.js");
var word=require("./word.js");
var inquirer = require('inquirer');
var colors=require("colors")
var fs=require("fs");
//--------------------------
var guessesAllowed=7;
var previousBlanks;
var i=0;
var wordsIndex=0;
//WILL READ FROM FILE WORDS.TXT IN FUTURE
var wordBank=["cat","lion","whale","snake","END"];
var currentWord=wordBank[wordsIndex];
var wordtoGuess=new word(currentWord);


//----------------------------

//first run displaying
function firstDisplay(){
    wordtoGuess.isGuesscorrect(1);
    var startDisplay=wordtoGuess.displayWord();
    console.log(startDisplay);
}
  
//displays after first
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
    i=0;
    //letterfromWord.startingOvervars();
    wordtoGuess.currentWordarray=[];
}

function inquire(){
    inquirer.prompt([
        {
          type: "input",
          name: "guess",
          message: "Guess a Letter!"
        }
    ]).then(function(userInput) {
        if(userInput.guess==="QUIT"){
            return;
        }
        if(i==0){
            previousBlanks=wordtoGuess.currentWordarray.length;
            i++;
        }

        lookingforGuess(userInput.guess);
        
        var currentBlanks=blanks();
        
        if(currentBlanks===0){
            console.log("CONGRATS YOU HAVE GUESSED THE WORD".rainbow);
            wordsIndex++;
            resetvalues();
            runGame();
        }
        else if (currentBlanks<previousBlanks){
            console.log("CORRECT".green);
            inquire();
            
        }
        else if (currentBlanks===previousBlanks){
            guessesAllowed--;
            console.log("INCORRECT".red);
            console.log("You have "+guessesAllowed+" guesses remaining!")
            if(guessesAllowed!==0){
                inquire();
            }
            else{
                console.log("GAMEOVER".inverse)
                wordsIndex++;
                resetvalues();
                runGame();

            }
        }
        
        previousBlanks=currentBlanks;
        
    } );
}


function runGame(){
    currentWord=wordBank[wordsIndex];
    wordtoGuess=new word(currentWord);
    console.log("LETS PLAY");
    if(currentWord!=="END"){
        //DISPLAY BLANG BEFORE GESSING
        firstDisplay();
        inquire();
    }
    else{
        console.log("YOU HAVE GONE THROUGH ALL THE WORDS AVAILABLE");
    }

}

runGame();



//FUTURE IMPROVEMNTS
//WILL USE THIS FUNCTION TO READ FROM FILE
/*function readWord(wordsIndex){
    fs.readFile("words.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
          }
          var dataArray=data.split(",");
          var currentWord=dataArray[wordsIndex];
          wordsIndex++;
          return currentWord;
          
    });
}*/
