function letter(Letter){
    
    this.currentLetter=Letter.toUpperCase();
    this.correctGuess=false;
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
    //console.log(this.correctGuess);
}


module.exports=letter;
