function Letter(a) {
  // console.log("This exported");
  this.value = a;
  if (this.value === " ") {
    this.isGuessed = true;
  } else {
    this.isGuessed = false;
  }
  this.display = function() {
    if (this.isGuessed) {
      return this.value;
    } else {
      return "_";
    }
  };
  this.guess = function(a) {
    if (this.value === a) {
      this.isGuessed = true;
    //   console.log("correct!");
    }
  };
}

module.exports = Letter;

// //Below is some testing I did to ensure it functions.
// var a = new Letter("a");
// var b = new Letter("b");
// var c = new Letter("c");
// console.log(a.value)
// console.log(b.isGuessed)
// var bPrime = b.display();
// console.log(bPrime);
// b.guess("b");
// var bPrime = b.display();
// console.log(bPrime);
