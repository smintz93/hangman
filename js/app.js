console.log("Linked")


// Pick a random word 
// While the word has not been guessed show the player their current progress
// Get a guess from the player 
// If the guess if guess is in the word 
// Update the players progress 

// Array of words 
// chose word random
// create underscores based on word length
// get the users guess
// if right push to right array 
// if wrong push to wrong array

const words = ["goal", "tackle", "score", "corner"]



let randNum = Math.floor(Math.random() * words.length);
let randomWord = words[randNum];
	console.log(randomWord)

let underScore = [];
let rightWord = [];
let wrongWord = [];

let addUnderScore = document.getElementsByClassName("underscore")
let addRightGuess = document.getElementsByClassName("right-guess")
let addWrongGuess = document.getElementsByClassName("wrong-guess")


// function to generate the under scores depending on each word

const generateUnderscore = function() {
	for (let i = 0; i < randomWord.length; i++) {
		underScore.push(" _ ");
	}
	return underScore
}




document.addEventListener("keypress", (event) => {
	let keycode = event.keyCode
	// converting into a string 
	let keyword = String.fromCharCode(keycode)
	console.log(randomWord.indexOf(keyword))
	// if users guess is right 
	if(randomWord.indexOf(keyword) > - 1){
		//add to right words array
		rightWord.push(keyword)


		// replace underscore with actual letters 
		underScore[randomWord.indexOf(keyword)] = keyword;

		addUnderScore[0].innerHTML = underScore.join("")
		addRightGuess[0].innerHTML = rightWord.join("")


			if(underScore.join("") === randomWord) {
				alert("You win")
			}
		console.log(underScore)
		// console.log(rightWord)
	} else {
		wrongWord.push(keyword)
		addWrongGuess[0].innerHTML = wrongWord.join("")
		
	}
}); 




addUnderScore[0].innerHTML = generateUnderscore().join(" ");

