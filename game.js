var letter=require("./letter.js");
var word=require("./word.js");
var inquirer = require('inquirer');
var userGuess=process.argv[2].toLocaleUpperCase();

//first run displaying
var wordtoGuess = new word("cat");
wordtoGuess.isGuesscorrect(1);
var startDisplay=wordtoGuess.displayWord();
console.log(startDisplay);
  
//following rounds
function lookingforGuess(){
    wordtoGuess.isGuesscorrect(userGuess);    
    var consecutiveDisplays=wordtoGuess.displayWord();
    console.log(consecutiveDisplays);
}

lookingforGuess();
var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([

  {
    type: "input",
    name: "guess",
    message: "Guess a Letter"
  },

  

]).then(function(user) {
});


