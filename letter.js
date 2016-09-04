/* LETTER CONSTRUCTOR */
var Letter = function(let)
{
	// character property
	this.charac = let.toLowerCase();
	this.appear = false;

	/* LETTER RENDER FUNCTION: Fills the word with "_" or returns a matched character */ 
	this.letterRender = function()
	{
		if(this.appear){
			return this.charac;
		} else {
			return "_";
		}
	}
};
// export letter function
module.exports = Letter;