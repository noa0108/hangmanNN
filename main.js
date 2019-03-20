//GLOBAL VARIABLES (accesible by all functions)
//--------------------------------------------------------------

//ARRAY of Word Options (all lowercase)
var wordsList = ["cherry", "banana","strawberry"];

//solution will be held here 
var chooseword = "";

//This will break the solution into individual letters to be stored in array
var letterInChosenWord = [];

//This will be the number of blanks we show based on the solution 
var numBlanks = 0;

//Holds a mix of blank and solved lettera (ex: 'a-ple')
var blankAndSuccesses = [];

//Holds all of the wrong guesses 
var wrongGuesses = [];



//Game counters 
var winCounter = 0;
var lossCounter = 0;
var numGuesses= 9;


//FUNCTIONS 
//-----------------------------------------------------------------------------------------------------------


//Note: startGame () is not being run here . It's just being made for future use 
function startGame(){
    
    //resets the guesses back to original specified number
    numGuesses = 9;

    //Solution is chosen randomly from wordList
    chosenWord = wordsList[Math . floor(Math . random() * wordsList . length)];

    //The word is broken into individual letters 
    lettersInChosenWord = chosenWord.split("");

    //We count the number of letters in the word 
    numBlanks = lettersInChosenWord.length;

    //We print the solution in console (for testing)
    console.log(chosenWord);

    //CRITICAL LINE - Here we reset the guess and success array at each round 
    blankAndSuccesses = [];
    //CRITICAL LINE - Here we reset the guess and success array at each round
     wrongGuesses = [];

     //Fill up the blanksAnsSuccesses list with appropriate number of blanks,
     //which will be based on the number of letters on the solution 
     for (var i = 0; i < numBlanks; i++){
         blankAndSuccesses.push("_");
     }

        // Print the initial blanks in the console
        console.log(blankAndSuccesses);

        //Reprints the guessesLeft to 9
        document.getElementById ("guesses-left").innerHTML = numGuesses;

        // Prints the blanks at the beginning of each round in the HTML
        document.getElementById("word-blanks"),innerHTML = blankAndSuccesses.join(" ");

        // Clears the wrong guesses from the previous round
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
    }


