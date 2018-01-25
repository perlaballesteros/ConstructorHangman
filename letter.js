function letter(Letter){
    
    this.currentLetter=Letter.toUpperCase();
    this.correctGuess=false;
    this.letterGuessed=0;
}

letter.prototype.display=function(){
    if(this.correctGuess===false){
        return "_";
    }
    else{
        return this.currentLetter;
    }
}

letter.prototype.correctlyGuessed=function(guess){
    //console.log(this.correctGuess);
    if(guess===this.currentLetter){
        this.correctGuess=true;
    }
    else{
        this.correctGuess=false;    
    }
}
letter.prototype.startingOvervars=function(){
    this.correctGuess=false;
    this.letterGuessed=0;
}
module.exports=letter;
