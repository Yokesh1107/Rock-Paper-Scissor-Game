
const randomComputer=()=>{
    const rps=["rock","paper","scissors"]
    let random=Math.floor(Math.random()*3)
    return rps[random]
}
const getResult=(player,computer)=>{
    let score
    if(player==computer){
        score=0
    }
    else if(player=='rock' && computer=='scissor'){
        score=1
    }else if(player=='paper' && computer=='rock'){
        score=1
    }else if(player=='scissor' && computer=='paper'){
        score=1
    }
    
    else{
        score=-1
    }
    return score
}
const displayScore=(score,player,computer)=>{
    let res=document.getElementById('result')
    switch(score){
        case -1:
            res.innerText="Computer Won😶‍🌫️😶‍🌫️"
            break
        case 1:
            res.innerText="You Won!!!😎😎"
            break
        case 0:
            res.innerText="Draw !! 🙃🙃"
            break
    }
    let score1=document.getElementById('score')
    let com=document.getElementById('compare')
    score1.innerText= ` ${Number(score1.innerText)+score}`
    com.innerText=`${player} vs ${computer}`
}
const clickButton=(player)=>{
    let computer=randomComputer()
    let result=getResult(player.value,computer)
    displayScore(result,player.value,computer)
}

const playGame=()=>{
    let rpsOptions=document.querySelectorAll('.rps')
    rpsOptions.forEach(rpsOption=>{
        rpsOption.onclick=()=>{
            clickButton(rpsOption)
            console.log(rpsOption)
        }
    })
    let stop=document.getElementById('stopGame')
    stop.onclick=()=>{
        clearGame()
    }
}
const clearGame=()=>{
    let com=document.getElementById('compare')
    let res=document.getElementById('result')
    let score=document.getElementById('score')
    com.innerText=''
    res.innerText=''
    score.innerText=''
}
playGame()
//console.log(displayScore(getResult('scissor','rock'),randomComputer(),randomComputer()))


