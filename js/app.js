'use strict';

console.log('Hey hey hey');

let userName = prompt('What is your name?')

alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

let correctAnswers = 0;

function firstGuess(){
let firstGuess = prompt('Do I have a dog?').toLowerCase();

if(firstGuess === 'y' || firstGuess === 'yes' || firstGuess === 'Yes'){
  alert('Wrong guess, I am a cat lover!');
} else if(firstGuess === 'n' || firstGuess === 'no' || firstGuess === 'No'){
  alert('You are right, I adore cats. I have two of them.');
}
correctAnswers++;
}
firstGuess();

function secondGuess(){
let secondGuess = prompt('Was I born in USA?').toLowerCase();

if(secondGuess === 'yes' || secondGuess === 'y'){
  alert('Haha, no this is a wrong guess!');
} else if(secondGuess === 'n' || secondGuess === 'no'){
  alert('This is correct, I was born in Belarus');
}

correctAnswers++;
}
secondGuess();

function thirdGuess(){
let thirdGuess = prompt('Am I from Seattle?').toLowerCase();

if(thirdGuess === 'yes' || thirdGuess === 'y'){
  alert('Sure, I live here 8 years now!');
} else if(thirdGuess === 'n' || thirdGuess === 'no'){
  alert('No, I live in Seattle 8 years now!');
}

correctAnswers++;
}
thirdGuess(); 

function fourthGuess(){
let fourthGuess = prompt('Am I a good swimmer?').toLowerCase();

if(fourthGuess === 'y' || fourthGuess === 'yes' || fourthGuess === 'Yes'){
  alert('Sure, I was swimming all my life!');

  correctAnswers++;
} else if(fourthGuess === 'n' || fourthGuess === 'no' || fourthGuess === 'No'){
  alert('Wrong guess, I love to swim!');
}

correctAnswers++;
}
fourthGuess();

function fifthGuess(){
let fifthGuess = prompt('Am I a good runner?').toLowerCase();

if(fifthGuess === 'y' || fifthGuess === 'yes' || fifthGuess === 'Yes'){
  alert('Haha, no I hate running!');
} else if(fifthGuess === 'n' || fifthGuess === 'no' || fifthGuess === 'No'){
  alert('Sure thing, I hate running!');
}

correctAnswers++;

alert(`Thanks for playing, ${userName}! You got ${correctAnswers} out of 7 questions correct.`);
}
fifthGuess();