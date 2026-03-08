
let output = document.getElementById('result')

function play(turn){
    console.log("turn", turn)
    var comNum = Math.floor(Math.random()*3)
    // console.log(comNum)
    var choise = ['rock', "paper", "scissor"]
    var comChoise = choise[comNum]
    console.log(comChoise)

    if(turn == comChoise){
        output.innerText = 'Draw'
    }else if ((turn == 'rock' && comChoise == 'scissor') || (turn == 'paper' && comChoise == 'rock') || (turn == 'scissor' && comChoise == 'paper')){
        output.innerText = `player chose ${turn} and Ai chose ${comChoise} so , !you won`
    }else {
        output.innerText = `player chose ${turn} and Ai chose ${comChoise} so , !Ai won`
    }

}

