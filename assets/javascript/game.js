Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 4;
Main.NumInWordBank = Words.List.length;

Main.Word = "test";
Main.WordU ="";
guessArray = [];

// function start here

Main.pullWord = function() {
	Main.Word = Words.List[(Math.floor(Math.random() * Main.NumInWordBank))];
	console.log(Main.Word);
}



Main.setUnderline = function(){
	Main.pullWord();
	for(var i = 0; i < Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}

	 console.log(Main.Word);
	 console.log(Main.WordArray);
	 console.log(Main.WordUArray);
	
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;
	document.getElementById("numLetters").innerHTML = Main.Word.length;

	console.log(Main.WordU);
	console.log(Main.Word.length);
}

	Main.updateLetter = function(letter){
		Main.Changes = 0;
		var guess = String(letter).toLowerCase();
		// console.log(guess);
		guessArray.push(guess);
		// console.log(guessArray);
		guessArrayW = guessArray.join(" ");
		document.getElementById("guessed").innerHTML = guessArrayW;
		
		for(var i = 0; i < Main.Word.length; i++){
			Main.WordArray[i] = Main.Word.charAt(i);
			if(Main.Word.charAt(i) == letter){
				Main.WordUArray[i] = letter;
				Main.Changes =+ 1;
				
			}
		}

		if(Main.Changes < 1){
			Main.Lives --;
			document.getElementById("lives").innerHTML = Main.Lives;
			}

		Main.WordU = Main.WordUArray.join("");
		document.getElementById("WORD").innerHTML = Main.WordU;

		Main.Word1 = Main.WordArray.join("");
		Main.Word2 = Main.WordUArray.join("");

		if(Main.Word1 == Main.Word2){
			alert("You Won!  Loading a new word.");
			window.location.reload();
			}


		if(Main.Lives < 1){
			// document.getElementById("WORD").innerHTML = Main.Word1;
			alert("You have run out of lives!  Please try agian.");
			window.location.reload();
			}		
	}
	
	// Main.pullWord();
	Main.setUnderline();
	console.log(Main.Word);
	console.log(Main.Word.charAt(0));


