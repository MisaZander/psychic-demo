var compGuess = "j";
var userGuess, wins = 0, losses = 0, guessesLeft = 10;
var guesses = [];



document.onkeyup = function(event) {
    userGuess = event.key;

    if (userGuess === compGuess) {
        alert("UR WINNAR!");
    } else {
        guessesLeft--;
        
        guesses.push(userGuess);

        var output = "";

        for (var i = 0; i < guesses.length; i++){
            output += guesses[i] + " ";
        }

        document.getElementById("letters").innerHTML = output; 
    }
}