const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  function playGame() {
    readline.question('Guess the secret number (between 1 and 10): ', function(answer) {
      const number = parseInt(answer);
      attempts++;

      if (number === secretNumber) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);

        readline.question('Do you want to play again? (yes/no): ', function(playAgain) {
          if (playAgain.toLowerCase() === 'yes') {
            guessNumber();
          } else {
            console.log('Thanks for playing!');
            readline.close();
          }
        });
      } else if (number < secretNumber) {
        console.log('Too low! Try again.');
        playGame();
      } else {
        console.log('Too high! Try again.');
        playGame();
      }
    });
  }
  
  playGame(); 
}

guessNumber();