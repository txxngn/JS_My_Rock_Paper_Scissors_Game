var user_point = 0;
var comp_point = 0;
var user_choice;
var PC_choice;
var score = document.getElementById("score");
var result = document.getElementById("result");


//User's choice
function move(choice) {
    if (choice == 'rock') {
        user_choice = 'rock';
        document.getElementById("user-move").src = 'Images/Rock.png';
    } else if (choice == 'paper') {
        user_choice = 'paper';
        document.getElementById("user-move").src = 'Images/Paper.png';
    } else if (choice == 'scissor') {
        user_choice = 'scissor';
        document.getElementById("user-move").src = 'Images/Scissor.png';
    }

    PC_choice = computer();                //I put these two functions into move() function so at the moment user
    checkResult(user_choice, PC_choice);   //make the choice, the computer is calculated and the result is updated too.
}




//Function for computer's choice
function computer() {
    var random_num = Math.floor(Math.random() * 3);
    var computer_choices = ['rock', 'paper', 'scissor'];
    //update pc's image
    if (computer_choices[random_num] == 'rock')
        document.getElementById("computer-move").src = 'Images/Rock.png';
    else if (computer_choices[random_num] == 'paper')
        document.getElementById("computer-move").src = 'Images/Paper.png';
    else if (computer_choices[random_num] == 'scissor')
        document.getElementById("computer-move").src = 'Images/Scissor.png';
    return computer_choices[random_num];
}




// Function to update the score
function updatePoint() {
    score.innerText = "Score: User - " + user_point + " | Computer - " + comp_point;
}



// Function to check the result and display the winner
function checkResult(user_choice, PC_choice) {
    if (user_choice == PC_choice) {
        result.innerText = "Tie!";
    } else if (
        (user_choice == 'rock' && PC_choice == 'scissor') ||
        (user_choice == 'paper' && PC_choice == 'rock') ||
        (user_choice == 'scissor' && PC_choice == 'paper')
    ) {
        result.innerText = "You win this time!";
        user_point++;
    } else {
        result.innerText = "Computer win this time :(";
        comp_point++;
    }
    updatePoint();
}



// Function to reset the game
function resetGame() {
    user_point = 0;
    comp_point = 0;
    updatePoint();
    result.innerText = "";
}

// Function to display final result
function final() {
    var user_decision = confirm("Do you want to keep playing? \n Click 'OK' to continue \n Click 'Cancel' to display the result");
    if (user_decision === false) {
        display_final_result();
    }
}

function display_final_result() {
    var final_result;
    if (user_point > comp_point) {
        final_result = "Result : Congrats! you are the winner!";
    }
    else if (user_point < comp_point) {
        final_result = "Result : Computer win. Better luck next time!";
    }
    else
        final_result = "Result : You and computer are tie!";

    result.innerHTML = final_result;
}