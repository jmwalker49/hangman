Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 5;
Main.NumInWordBank = Words.List.length;

Main.Word = "test";
Main.WordU = "";
guessArray = [];

Main.pullWord = function () {
	Main.Word = Words.List[(Math.floor(Math.random() * Main.NumInWordBank))];
	
}

// function start here
     var x = document.getElementById("myAudio");
       function playAudio() {
        x.play();

                }
                playAudio();




Main.setUnderline = function(){
	Main.pullWord();
    var i;
	for (i = 0; i < Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}

	 console.log(Main.Word);
	 console.log(Main.WordArray);
	 console.log(Main.WordUArray);
	
	Main.WordU = Main.WordUArray.join(" ");
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
		
        var i;
		for (i = 0; i < Main.Word.length; i++){
			Main.WordArray[i] = Main.Word.charAt(i);
			if(Main.Word.charAt(i) == letter){
				Main.WordUArray[i] = letter;
                Main.Changes =+ 1;
				
			}
		}


		if
            (Main.Changes < 1) {
			Main.Lives --;
			document.getElementById("lives").innerHTML = Main.Lives;
			}

		Main.WordU = Main.WordUArray.join(" ");
		document.getElementById("WORD").innerHTML = Main.WordU;

		Main.Word1 = Main.WordArray.join(" ");
		Main.Word2 = Main.WordUArray.join(" ");

		if(Main.Word1 == Main.Word2){
			
               
				
               var x = document.getElementById("myAudio2");
                function playAudio() {
                    x.play();

                }
                playAudio();

            
			 alert("You Won!  Loading a new word.")
             window.location.reload();               
            };
            
           
  
            
           
		

		if(Main.Lives < 1){


			 var y = document.getElementById("myAudio3");
                function playAudio() {
                    y.play();

                }
              

			// document.getElementById("WORD").innerHTML = Main.Word1;
			alert("You have run out of lives!  Please try agian.");
			setTimeout(function(){
    window.location.reload();
},6000);
			
			playAudio();
			}		
	
		};

	Main.pullWord();
	Main.setUnderline();
	console.log(Main.Word);
	console.log(Main.Word.charAt(0));


