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
    let elem=document.createElement("p");
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
    elem.innerText=result;
    roundDetails.appendChild(elem);
    document.querySelector(".count :nth-child(2)").innerText=`Player - ${win}`;
    document.querySelector(".count :nth-child(3)").innerText=`Computer - ${lose}`;
}

function game(ps){
    let result;
    let compSelection;
    let playerSelection=ps;
    let x=1;
    compSelection=computerPlay();
    compSelection=compSelection.toLowerCase();
    playRound(playerSelection,compSelection);
    if(win===5||lose===5){
        if(win===5){
            winText.innerHTML="Congretulations! You Won";
        }
        else{
            winText.innerHTML="Computer Won";
        }
        btns.forEach((item)=>{
            item.disabled=true;
        })
        playAgain.style.display="inline-block";
    }
}

let score=0;
let win=0;
let lose=0;
let roundDetails=document.querySelector(".round-details")
let scoreDetails=document.querySelector(".count");
let winText=document.querySelector(".win-text");
let playAgain=document.querySelector(".playagain-btn");
let btns=document.querySelectorAll(".options button");
btns.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.preventDefault();
        game(e.target.value);
    })
})
playAgain.addEventListener("click",(e)=>{
    e.preventDefault();
    btns.forEach((item)=>{
        item.disabled=false;
    })
    winText.innerText="";
    score=0;
    win=0;
    lose=0;
    roundDetails.innerHTML="";
    document.querySelector(".count :nth-child(2)").innerText=`Player - 0`;
    document.querySelector(".count :nth-child(3)").innerText=`Computer - 0`;
    playAgain.style.display="none";
})



