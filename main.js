// declare imports and NPM modules
var prompt = require('prompt');
var Word = require('./word.js');

// starts the prompt
prompt.start();

/* GAME OBJECT */				
game = {
	wordBank: ["Florida", "Nevada", "California", "Montana", "Oregon", "Washinton", "Colorado", "Alaska"], // my FAVE states :)
	guessesRemaining: 10, // total guesses
	currentWrd: null,	// start the word object off at null
	startGame: function(wrd)
	{
		// ensure that user has 10 guesses
		this.resetGuessesRemaining();
		// get randomly selected word from wordBank array
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
		// populate currentWrd object with letters
		this.currentWrd.getLets();
		// keeps prompting user 
		this.keepPromptingUser();
	},

	/* RESET GUESSES FUNCTION */
	resetGuessesRemaining: function()
	{
		this.guessesRemaining = 10;
	},

	/* PROMPTING FUNCTION: Keeps prommpting user until either word is correctly guessed, or user runs out of guesses */
	keepPromptingUser: function()
	{
		// assign new 'self' variable and use in place of 'this'
		var self = this;

		prompt.get(['guessLetter'], function(err, result){

			// result is an object, i.e: { guessLetter: 'a'}

			// displays letters guessed so far
			console.log("The letter guessed: " + result.guessLetter);

			// checks if letter was in word, if it was it then sets that letter to 'found'
			var howManyUserGuesses = self.currentWrd.checkIfLetterFound(result.guessLetter);

			// if incorrect guess, decrement the remaning guesses
			if(howManyUserGuesses == 0)
			{
				console.log("Incorrect guess!");
				self.guessesRemaining--;
			}
			else
			{
				console.log("Correct guess!");

				// only check if we win if guess was correct
				if(self.currentWrd.didWeFindTheWord())
				{
					console.log("You are victorious!");
					return; // ends the game
				}
			}

			// displays remaining guesses and the rendered word to the user 
			console.log("Guesses left: ", self.guessesRemaining);
			console.log(self.currentWrd.wordRender());
			console.log("Letters you've guessed already: " + result.guessLetter);

			// keep prompting user as long as user has guesses remaining and word was not yet found
			if(self.guessesRemaining > 0 && self.currentWrd.found == false)
			{
				self.keepPromptingUser();
			}
			// at this point, user lost...
			else if(self.guessesRemaining == 0)
			{
				console.log("Game over ya fool. The word was: ", self.currentWrd.word);
				console.log("You're awful at US geography!");
			}
			else
			{
				console.log(self.currentWrd.wordRender());
			}
		});
	}
};

// starts game
game.startGame();