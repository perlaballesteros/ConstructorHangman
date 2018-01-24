var letter=require("./letter.js");
var word=require("./word.js");
var inquirer = require('inquirer');
var userGuess=process.argv[2].toUpperCase();

var wordtoGuess = new word("cat");
//first run displaying
function firstDisplay(){

    wordtoGuess.isGuesscorrect(1);
    var startDisplay=wordtoGuess.displayWord();
    console.log(startDisplay);
}
  
//following rounds
function lookingforGuess(){
    wordtoGuess.isGuesscorrect(userGuess);    
    var consecutiveDisplays=wordtoGuess.displayWord();
    console.log(consecutiveDisplays);
}

firstDisplay();
lookingforGuess();
