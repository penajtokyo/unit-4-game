
// my variables for my JQuery
var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/blue.png","./assets/images/green.png","./assets/images/red.png","./assets/images/yellow.png"]


// This is the object that generates the target number
function randomTargetNumber(){
    targetNumber = Math.floor(Math.random() *100) +20;
};

// this function set the random on the crystals and displays them
function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".crystal-images").append(crystal);
        console.log("resetCrystalsworking")
    }
}
// setr the win and loss and the counter
function resetHTML () {
    $(".targetNumber").html(targetNumber);
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".score-number").html(counter);
    $(".crystal-images").empty();
    console.log("ResetHTMLworking")
}

function totalReset () {
    randomTargetNumber ();
    counter = 0;
    resetHTML ();
    resetCrystals ();
    console.log("Totalresetisworking")
}

randomTargetNumber();
	resetHTML ();
    resetCrystals ();
    // the if and else statement that allows for winning or losing
    function crystalClick () {
        counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
        };
        console.log("clicks are working")
    };
    
    $(document).on("click", ".crystal", crystalClick);