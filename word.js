var letter=require("./letter.js");

function word (Word){
    this.currentWord=Word;
    this.currentWordarray=[];
}

word.prototype.isGuesscorrect=function(guess){
    if (guess===1){

        for( var i=0;i<this.currentWord.length;i++)
        {
            var letterfromWord=new letter(this.currentWord[i]);
            this.currentWordarray.push(letterfromWord.display());
        }
        this.currentWordstring=this.currentWordarray.toString();
    }
    else{
        this.currentWordarray=[];
        for( var i=0;i<this.currentWord.length;i++)
        {
            var letterfromWord=new letter(this.currentWord[i]);
            letterfromWord.correctlyGuessed(guess);
            this.currentWordarray.push(letterfromWord.display());
        }
        this.currentWordstring=this.currentWordarray.toString();
    }
}
word.prototype.displayWord=function(){
    this.currentWordstring=this.currentWordarray.join(" ");

    return this.currentWordstring;
} 



module.exports=word;