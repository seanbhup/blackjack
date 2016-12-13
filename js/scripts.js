// JS... WAIT FOR THE DOM vvvvv
$(document).ready(function(){
// -----------------------------
// ----------GLOBALS------------
// -----------------------------

var theDeck = [];

// Get deal working
$(".deal-button").click(function(){
	// Need a way to make the deck
	// ------MAKES DEAL BUTTON DISAPPEAR-------
	// var whatToDo = $(this).attr("toDo");
	// 	if(whatToDo == "hide"){
	// 		$("#deal").hide("slow");
	// 	}
	// ----------------------------------------
	createDeck();
	shuffleDeck();
	console.log("Deal");
})

$(".hit-button").click(function(){
	console.log("Hit");
})

$(".stand-button").click(function(){
	console.log("Stand");
});
// Run the dealer "hit" until it 

function createDeck(){
	// Fill the deck with:
	// - 52 cards
	// -- 4 suits (h,s,d,c)
	// -- 1-13 (11=J, 12=Q, 13=K)
	var suits = ["h", "s", "d", "c"];
	// Loop through all 4 suits (suits array)
	for(let s = 0; s < suits.length; s++){
		// Loop through all 13 cards for each suit
		for(let c = 1; c <= 13; c++){
			theDeck.push(c + suits[s]);
		}
	}
	// console.log(theDeck)
}


// Shuffle the deck
function shuffleDeck(){
	for(let i = 0; i < 1000; i++){
		var card1ToSwitch = Math.floor(Math.random() * theDeck.length);
		var card2ToSwitch = Math.floor(Math.random() * theDeck.length);
		var temp = theDeck[card1ToSwitch];
		theDeck[card1ToSwitch] = theDeck[card2ToSwitch];
		theDeck[card2ToSwitch] = temp;
	}
	console.log(theDeck);
}

})

