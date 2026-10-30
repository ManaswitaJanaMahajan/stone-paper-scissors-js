let Choices = document.querySelectorAll(".Choice");
let User_Score = 0;
let Com_Score = 0;
let UserScore = document.querySelector("#user-score");
let ComScore = document.querySelector("#com-score");

const Msg = document.querySelector("#msg");
const Reset = document.querySelector("#rst-btn");

Choices.forEach((Choice) => {
    Choice.addEventListener("click", () => {
        const User_choice = Choice.getAttribute("id");
        console.log ("",User_choice, "was clicked.");
        Game(User_choice);
    });
});

const Com_choice = () => {
    const choice = ["Rock","Paper","Scissor"];
    const idx = Math.floor(Math.random()*3);
    return choice[idx];
};

const Game = (User_choice) => {
    const Com_pick = Com_choice();
    console.log("User choice:",User_choice);
    console.log("Computer choice:",Com_pick);

    if(User_choice === Com_pick){
        console.log("It's a draw.");
        Msg.innerText = "It's a draw. Try again."; 
        Msg.style.backgroundColor = "#6c757d";
    }
    else{
        let Win = true;
        if(User_choice === "Rock"){
            Win = Com_pick === "Paper" ? false : true;
        }
        else if(User_choice === "Paper"){
            Win = Com_pick === "Scissor" ? false : true;
        }
        else{
            Win = Com_pick === "Rock" ? false : true;
        }
        showWinner (Win);
    }
};

const showWinner = (Win) => {
    if(Win){
        console.log("User win.");
        User_Score++;
        UserScore.innerText = User_Score;
        Msg.innerText = "You win!";
        Msg.style.backgroundColor = "green";

    }
    else{
        console.log("User lose.");
        Com_Score++;
        ComScore.innerText = Com_Score;
        Msg.innerText = "You lose.";
        Msg.style.backgroundColor = "red";
    }
}
Reset.addEventListener("click", () => {
    User_Score = 0;
    Com_Score = 0;
    UserScore.innerText = 0;
    ComScore.innerText = 0;
    Msg.innerText = "Play Your Move";
    Msg.style.backgroundColor = "transparent";
});

