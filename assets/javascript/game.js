
$(document).ready(function() {
    
    var Random = Math.floor(Math.random() * 100 + 1);

    $(".random-display").text(Random);

    var ranNum1 = Math.floor(Math.random() * 10 + 1);
    var ranNum2 = Math.floor(Math.random() * 10 + 1);
    var ranNum3 = Math.floor(Math.random() * 10 + 1);
    var ranNum4 = Math.floor(Math.random() * 10 + 1);

    var totalScore = 0; 
    var wins = 0;
    var losses = 0; 

    $("#wins").text(wins);
    $("#losses").text(losses);

    function reset (){
        Random = Math.floor(Math.random() * 100 + 1);
        $(".random-display").text(Random);
        ranNum1 = Math.floor(Math.random() * 10 + 1); 
        ranNum2 = Math.floor(Math.random() * 10 + 1);
        ranNum3 = Math.floor(Math.random() * 10 + 1);
        ranNum4 = Math.floor(Math.random() * 10 + 1);
        totalScore = 0; 
        $(".total-display").text(totalScore); 
    
    }

    function winGO(){
        alert("You won!");
          wins++; 
          $("#wins").text(wins);
          reset();
        }
        
    function loseGO(){
        alert ("You lose. Try again!");
          losses++;
          $("#losses").text(losses);
          reset();
        }



    $("#redJewel").on("click", function() {
        totalScore = totalScore + ranNum1;
        $(".total-display").text(totalScore);

            if (totalScore == Random) {
                winGO();
            }
            else if (totalScore > Random){ 
                loseGO();
            }

    })

    $("#blueJewel").on("click", function() {
        totalScore = totalScore + ranNum2;
        $(".total-display").text(totalScore);

            if (totalScore == Random) {
                winGO();
            }
            else if (totalScore > Random){ 
                loseGO();
            }

    })

    $("#yellowJewel").on("click", function() {
        totalScore = totalScore + ranNum3;
        $(".total-display").text(totalScore);

            if (totalScore == Random) {
                winGO();
            }
            else if (totalScore > Random){ 
                loseGO();
            }

    })

    $("#greenJewel").on("click", function() {
        totalScore = totalScore + ranNum4;
        $(".total-display").text(totalScore);

            if (totalScore == Random) {
                winGO();
            }
            else if (totalScore > Random){ 
                loseGO();
            }

    });
});


