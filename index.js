var inquirer = require("inquirer");
var wordLink = require("./word");
// var letter = require("./letter");

var wordbank = [
  "frodo ringbearer",
  "bilbo baggins",
  "gimli",
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
  "gandalf the gray",
  "gandalf the white",
  "gandalf grayhame",
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

// var chosenWord = wordbank[Math.floor(Math.random()*wordbank.length)]
// var answer = new wordLink(chosenWord);
// answer.constructWord();
// answer.displayProgress();
var chosenWord = "";
var answer = "";
var guessesLeft = 8;
var gameOver = 0;

newGame();
guessLetter();

function newGame() {
  console.log("Welcome to Lord of the Rings word-guess!");
  chosenWord = wordbank[Math.floor(Math.random() * wordbank.length)];
  answer = new wordLink(chosenWord);
  answer.constructWord();
  answer.displayProgress();
  guessesLeft = 8;
  gameOver = 0;
}

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
          //I will add a "start new game" option here
          inquirer
            .prompt([
              {
                type: "confirm",
                name: "restart",
                message: "Do you want to play again?"
              }
            ])
            .then(function(startAgain) {
              if (startAgain.restart) {
                newGame();
                guessLetter();
              }
            });
        } else {
          gameOver = 0;
          guessLetter();
        }
      } else {
        guessesLeft -= 1;
        console.log("You have " + guessesLeft + " guesses left.");
        if (guessesLeft === 0) {
          console.log("You lose! Game Over!");
          console.log("The correct answer is " + answer.word + ".");
          inquirer
            .prompt([
              {
                type: "confirm",
                name: "restart",
                message: "Do you want to play again?"
              }
            ])
            .then(function(startAgain) {
              if (startAgain.restart) {
                newGame();
                guessLetter();
              }
            });
        } else {
          guessLetter();
        }
      }
    });
}
