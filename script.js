const countries = ["SPAIN", "BRAZIL", "CHINA", "ITALY", "FRANCE", "MEXICO" ];     

const blankWords = ["_ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _", "_ _ _ _ _", "_ _ _ _ _", "_ _ _ _ _ _"];
//                
const hints = [`HINT: 🇪🇸`, `HINT: 🇧🇷`, `HINT: 🇨🇳`, `HINT: 🇮🇹`, `HINT: 🇫🇷`, `HINT:🇲🇽`];

const wordDisplay = document.getElementById("word");
const livesTracker = document.getElementById("lives-tracker")
const hintMsg = document.getElementById("hint-msg");
const hangmanImg = document.querySelector(".hangman-container img")
const letterBttn = document.querySelector(".letter-bttn");


const randomIndex = Math.floor(Math.random()* countries.length);
let livesUsed = 0;
let maxLives = 6;
let blanksDisplay = blankWords[randomIndex];
let correctLetters = [];

const word = countries[randomIndex];
const hintDisplay = hints[randomIndex]

wordDisplay.innerText = blanksDisplay;
hintMsg.innerText = hintDisplay;
livesTracker.innerText = `Lives used: ${livesUsed} / ${maxLives}`; 


function clickedLetter(letter) {
    let newBlanksDisplay;
    if (word.includes(letter) === true) {
        correctLetters.push(letter);
        let letterIndex = word.indexOf(letter);
        letterIndex = letterIndex + letterIndex;
        let stringArray = blanksDisplay.split('');
        stringArray[letterIndex] = letter;
        newBlanksDisplay = stringArray.join("");
        blanksDisplay = newBlanksDisplay;
        wordDisplay.innerText = blanksDisplay;

    } else {
        livesUsed ++;
        hangmanImg.src = `assets/hangman-${livesUsed}.png`
    }
    livesTracker.innerText = `Lives used: ${livesUsed} / ${maxLives}`;

    if (livesUsed === maxLives) {
        alert("He died :( You lose.")
    } ;
    if (correctLetters.length === word.length) {
        alert("He lives to see another day. You win!")
    };
        
    // }
    
}











