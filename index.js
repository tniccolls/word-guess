var inquirer = require("inquirer");
var wordLink = require("./word");
// var letter = require("./letter");
console.log("Welcome to Lord of the Rings word-guess!");
var wordbank = [
  "frodo ringbearer",
  "bilbo baggins",
  "gimly",
  "aragorn the strider",
  "one ring to rule them all",
  "legolas greenleaf",
  "mordor",
  "the two towers",
  "sam gamgee",
  "the witch king of angmar",
  "smeagol",
  "my precious",
  "return of the king",
  "faramir son of denethor",
  "boromir son of denethor",
  "gandalf the grey",
  "gandalf the white",
  "gandelf greyhame",
  "mithrandir",
  "stormcrow",
  "king theodin",
  "ride of the rohirrim",
  "sauron",
  "merry and pippen and sam",
  "ent march",
  "council of elrond",
  "fly you fools"
];


var chosenWord = wordbank[Math.floor(Math.random()*wordbank.length)]
var answer = new wordLink(chosenWord);
// var myTestWord = new wordLink("thor son of odin");
answer.constructWord();
answer.displayProgress();
var guessesLeft = 8;
var gameOver = 0;
function guessLetter() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "guessedLetter",
        message: "Guess a letter: "
      }
    ])
    .then(function(letterInput) {


      answer.checkLetter(letterInput.guessedLetter);
      if (answer.word.indexOf(letterInput.guessedLetter) > -1) {
        console.log("Correct!");
        //check to see if all letters are isGuessed, if Y then exit, if N then call guessLetter()
        for (var j = 0; j < answer.word.length; j++) {
          if (answer.constructedLetterArray[j].isGuessed === true) {
            gameOver += 1;
          }
        }
        if (gameOver === answer.word.length) {
          console.log("You Win!");
        } else {
          gameOver = 0;
          guessLetter();
        }
      } else {
        guessesLeft -= 1;
        console.log("You have " + guessesLeft + " guesses left.");
        if (guessesLeft === 0) {
          console.log("You lose! Game Over!");
          console.log("The correct answer is " + answer.word);

        } else {
          guessLetter();
        }
      }
    });
}

guessLetter();
