// import Letter by requiring letter.js file
var Letter = require('./letter.js');

/* WORD CONSTRUCTOR */
var Word = function(wrd)
{
	// sets property lets to empty array. Letter objects will be pushed here.
	this.word = wrd;
	this.lets = [];
	// sets found property to false
	this.found = false;

	// getLets function that loops over the word property and pushes letter objects into the lets property
	this.getLets = function()
	{
		for(var i = 0; i < this.word.length; i++)
		{
			// pushes new letter object to the lets array 
			this.lets.push(new Letter(this.word[i]));
		}
	};

	// didWeFindTheWord function that determines whether a match was found or not
	this.didWeFindTheWord = function()
	{
		// sets found to true as word was found
		found = true;

		for(var i = 0; i < this.lets.length; i++)
		{
			// we did not find the letter
			if(this.lets[i].appear == false)
			{
				found = false;
			}
		}
		return found;
	};

	// checks is letter was found
	this.checkIfLetterFound = function(guessLetter)
	{
		// variable set to 0 that determines what to return
		var returnThis = 0;

		// loop over lets property, and if letter object char property == guessLetter; set appear property to true
		for(var i = 0; i < this.lets.length; i++)
		{
			if(this.lets[i].charac == guessLetter.toLowerCase())
			{
				// the letter at index i appeared
				this.lets[i].appear = true;
				returnThis++;
			}
		}
		return returnThis;
	};

	this.wordRender = function()
	{
		// empty String variable
		var str = "";

		// loop over this.lets and call the letterRender property of the letter object that we are looping over, then add to 'str'
		for(var i = 0; i < this.lets.length; i++)
		{
			// the str string holds the "_" as well as correctly guessed letters
			str += this.lets[i].letterRender();
		}

		return str;
	};
} 
// export Word constructor
module.exports = Word;