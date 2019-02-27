// import { Letter } from "letter.js";
var Letter = require("./letter");

// testWord.displayProgress();
function Word(answer) {
  this.letterArray = [];
  this.constructedLetterArray = [];
  this.word = answer;
  var letter;
  this.constructWord = function() {
    for (var i = 0; i < this.word.length; i++) {
      letter = new Letter(this.word[i]);
      this.constructedLetterArray.push(letter);
    }
  };

  this.displayProgress = function() {
    this.letterArray = [];
    for (var i = 0; i < this.word.length; i++) {
    //   console.log(this.constructedLetterArray[i]);
        // console.log(this.letterArray);

        var letterDisplay = this.constructedLetterArray[i].display();
        this.letterArray.push(letterDisplay);
    }
    // console.log(this.constructedLetterArray);
    // console.log(this.letterArray);
    var wordString = this.letterArray.join();
    var leanArray = "";
    console.log(leanArray);
    for (i = 0; i < wordString.length; i += 2) {
      leanArray += wordString[i] + " ";
    }
    console.log(leanArray);
  };
  //   this.displayProgress(answer);
  //   console.log(this.letterArray);
  this.checkLetter = function(a){
    for(i=0; i<this.constructedLetterArray.length; i++){
        this.constructedLetterArray[i].guess(a);
    }
    this.displayProgress();
}
}



var testWord = new Word("testing");
var testWord2 = new Word("try a phrase");
// for(i=0; i<testWord2.length; i++){
//     testWord2.letterA
// }

// testWord2.constructWord();

// testWord2.displayProgress();
// testWord2.checkLetter(" ");
// testWord2.checkLetter("t");
// testWord2.checkLetter("p");
// testWord2.checkLetter("a");

// testWord2.checkLetter("r");

module.exports = Word;