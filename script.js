function computerPlay(){
    let rnum=Math.floor(Math.random()*3)+1;
    switch(rnum){
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection,compSelection){
    let result;
    if(playerSelection===compSelection){
        result= ("Its a draw ! "+playerSelection+" vs "+compSelection);
    }
    else if(playerSelection==='rock'){
        if(compSelection==='scissors'){
            result=("You Win ! "+playerSelection+" beats "+compSelection);
            score++;
            win++;
        }
        else{
            result= ("You Lose ! "+compSelection+" beats "+playerSelection);
            lose++;
        }
    }
    else if(playerSelection==='paper'){
        if(compSelection==='rock'){
            result=("You Win ! "+playerSelection+" beats "+compSelection);
            score++;
            win++;
        }
        else{
            result= ("You Lose ! "+compSelection+" beats "+playerSelection);
            lose++;
        }
    }
    else if(playerSelection==='scissors'){
        if(compSelection==='paper'){
            result= ("You Win ! "+playerSelection+" beats "+compSelection);
            score++;
            win++;
        }
        else{
            result= ("You Lose ! "+compSelection+" beats "+playerSelection);
            lose++;
        }
    }
    else{
        result= ("Invalid Input");
    }
    return result;
}

function game(){
    let result;
    let compSelection;
    let playerSelection;
    let playerSelection2;
    let compSelection2;
    while(win+lose<5){
        compSelection=computerPlay();
        playerSelection=prompt("Whats your choice? Rock, Paper or Scissors: ");
        playerSelection2=playerSelection.toLowerCase();
        compSelection2=compSelection.toLowerCase();
        result=playRound(playerSelection2,compSelection2);
        console.log(result);
    }
    if(score>=3){
        console.log("Score : "+score+" / 5\nYou win the game");
    }
    else{
        console.log("Score : "+score+" / 5\nYou lose the game");
    }
}

let score=0;
let win=0;
let lose=0;
game();


