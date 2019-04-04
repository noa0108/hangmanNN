// GLOBAL VARIABLES (accesible by all funcitons)
// --------------------------------------------------------------

// Array of Word Options (all lowercase)
var wordsList = ["bannana", "strawberries", "watermelon"];

// Solution will be held here
var chosenWord = "";

// This will break the solution into individual 
// letters to be stored in array
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: 'a_ple')
var blanksAndSuccesses = [];

// Holds all of the wrong guesses
var wrongGuesses = [];


// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


// FUNCTIONS
// -------------------------------------------------------------

// Note: startGame() is not being run here. It's just being made for
//       future use
function startGame() {

    // resets the guesses back to original specified number
    numGuesses = 9;

    // Solution is chosen randomly from wordList
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

    // The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    // We count the number of letters in the word
    numBlanks = lettersInChosenWord.length;

    // We print the solution in console (for testing)
    console.log(chosenWord);

    // CRITICAL LINE - Here we reset the guess and success array at each round
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we reset the wrong guesses from the previous round
    wrongGuesses = [];

    // Fill up the blanksAndSuccesses list with appropriate number of blanks,
    // which will be based on the number of letters in the solution
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // Print the initial blanks in the console
    console.log(blanksAndSuccesses);

    // Reprints the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    // Clears the wrong guesses from the previous round
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
 
}

// It's where we will do all of the comparisons for matches
function checkLetters(letter) {

    //This boolean will be toggled based on whether or not a user letter is found in the word
    var letterInWord = false;

    // Check if a letter exists inside the array at all
    for (var i = 0; i < numBlanks; i++) {

        if (chosenWord[i] === letter) {

            // If the letter exists then toggle this boolean to true. This will be used in the next step
            letterInWord = true;

        }

    }

    // If the letter exists somewhere in the woprd, then figure out exactly where (which indices)
    if (letterInWord) {

        // Loop through the word
        for (var j = 0; j < numBlanks; j++) {

            // Populate the blanksAndSuccesses with every instance of the letter
            if (chosenWord[j] === letter) {

                // Here we set the specific space in the blanks and letter equal to the letter when there is a match
                blanksAndSuccesses[j] = letter;

            }

        }

        // Logging for testing
        console.log(blanksAndSuccesses);

    }

    // If the letter doesn't exist at all...
    else {

        //...then we add the letter to the list of wrong letters, and we subtract one of the guesses
        wrongGuesses.push(letter);
        numGuesses--;

    }
}

// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left
    console.log(`WinCount: ${winCounter} | LossCount: ${lossCounter} | NumGuesses: ${numGuesses}`);

    // Update the HTML to refelct the new number of guesses. Also update the correct guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // This will print the wrong guesses onto the page
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    // This will print the wrong guesses onto the page
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    // If we have gotten all the letters to match the solution...
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

        //...add to the win counter and give the user an alert
        winCounter++;
        alert("You win!");

        // Update the win counter in the HTML and restart the game
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();

    } 

    // If we've run out of guesses...
    else if (numGuesses === 0) {

        // Add to the loss counter
        lossCounter++;

        // Give the user an alert
        alert("You lose");

        // Update the loss counter in the HTML
        document.getElementById("loss-counter").innerHTML = lossCounter;

        // Restart the game
        startGame();
    }

}


// MAIN PROCESS (This is the code that controls what is actually run)
// ---------------------------------------------------------------------------

// Starts the Game
startGame();

// Initiate the function for capturing key clicks
document.onkeyup = function(event) {

    // Converts all key clicks to lowercase letters
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    // Runs the code to check for correctness
    checkLetters(letterGuessed);

    // Runs the code after each round is done
    roundComplete();

};