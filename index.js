// document.addEventListener('DOMContentLoaded', (event) => {

var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];

//Function to choose a random word from array
function randomWord(words) {
  const randomIndex = Math.floor(math.random() * words.length);
  document.write(words[randomWord]);
  console.log(words);
}
randomWord();

//Function to convert word to underscores
function convertToUnderscrore(word) {
  return word.split('').map(letter => '_').join(' ');
}

convertToUnderscrore();

//Initialize game
function InitializeGame() {
  const wordToGuess = document.getElementById('word-to-guess');
  const remainingGuesses = document.getElementById('remaining-guesses');
  const incorrectLetters = document.getElementById('incorrect-letters');

  const chosenWord = randomWord(words);
  const wordUnderscore = convertToUnderscrore(chosenWord);

  wordToGuess.textContent = wordUnderscore;
  remainingGuesses.textContent = 'Remaining guesses: 10';
  incorrectLetters.textContent = 'Incorrect letters: ';

  // Store the chosen word and remaining guesses in the element's dataset for later use
  wordToGuess.dataset.chosenWord = chosenWord;
  wordToGuess.dataset.remainingGuesses = 10;
  wordToGuess.dataset.incorrectLetters = '';
}

//Function to handle key press events
function handleKeyPress(event) {
  const wordToGuess = document.getElementById('word-to-guess');
  const remainingGuesses = document.getElementById('remaining-guesses');
  const incorrectLetters = document.getElementById('incorrect-letters');

  const chosenWord = wordToGuess.dataset.chosenWord;
  // let remainingGuesses = parseInt(wordToGuess.dataset.remainingGuesses, 10);
  // let incorrectLetters = wordToGuess.dataset.incorrectLetters;

        const letter = event.key.toLowerCase();

//Only process if the key is a letter

if (/^[a-z]$/.test(letter)) {
  if (chosenWord.includes(letter)) {
      let displayedWord = wordToGuess.textContent.split(' ');
      for (let i = 0; i < chosenWord.length; i++) {
          if (chosenWord[i] === letter) {
              displayedWord[i] = letter;
          }
      }

      wordToGuessElement.textContent = displayedWord.join(' ');
    } else {
        if (!incorrectLetters.includes(letter)) {
            incorrectLetters += letter + ' ';
            incorrectLetters.textContent = 'Incorrect letters: ' + incorrectLetters;
            remainingGuesses--;
            remainingGuesses.textContent = 'Remaining guesses: ' + remainingGuesses;
        }
    }
    wordToGuess.dataset.remainingGuesses = remainingGuesses;
    wordToGuess.dataset.incorrectLetters = incorrectLetters;
}
}

handleKeyPress();



InitializeGame();
document.addEventListener('keydown', handleKeyPress);


