//Getting all the elements from the page which are important
let t1shots = document.getElementById('teamone-numshots')
let t1goals = document.getElementById('teamone-numhits')
let t2shots = document.getElementById('teamtwo-numshots')
let t2goals = document.getElementById('teamtwo-numhits')
let t1wins = document.getElementById('teamone-wins')
let t2wins = document.getElementById('teamtwo-wins')
let resets = document.getElementById('num-resets')
let t1Button = document.getElementById("teamone-shoot");
let t2Button = document.getElementById("teamtwo-shoot");
let rButton = document.getElementById("reset");
let team1shots = 0
let team2shots = 0
let team1goal = 0
let team2goal = 0
let resetNum = 0
let team1wins = 0
let team2wins = 0
let goalSound = new Audio('./assets/sound/goal.wav');
let missSound = new Audio('./assets/sound/miss.wav');
let resetSound = new Audio('./assets/sound/reset.wav');



function team1Shoot(){
    t1Button.addEventListener('click', function(){
        let shotChance = Math.floor(Math.random() * 10)
        console.log('Team one shot a goal')
        team1shots++
        t1shots.innerHTML = team1shots
        if (shotChance > 5) {
            console.log('GOAL!!!!!!!!!')
            team1goal++
            t1goals.innerHTML = team1goal
            goalSound.play()
        } else {
            missSound.play()
        }
    })
}

function team2Shoot(){
    t2Button.addEventListener('click', function(){
        let shotChance = Math.floor(Math.random() * 10)
        console.log('Team two shot a goal')
        team2shots++
        t2shots.innerHTML = team2shots
        if (shotChance > 5) {
            console.log('GOAL!!!!!!!!!')
            team2goal++
            t2goals.innerHTML = team2goal
            goalSound.play()
        } else {
            missSound.play()
        }
    })
}

function resetButton(){
    rButton.addEventListener('click', function(){
        console.log('Game reset')
        if (team1goal < team2goal) {
            team2wins++
            t2wins.innerHTML = team2wins

            alert('Team 2 wins!')
        } else if (team2goal == team1goal) {
            alert('Its a tie!')
        } 
        else {
            alert('Team 1 wins!')
            team1wins++
            t1wins.innerHTML = team1wins
        }
        team1shots = 0
        t1shots.innerHTML = team1shots
        team2shots = 0
        t2shots.innerHTML = team2shots

        team1goal = 0
        t1goals.innerHTML = team1goal

        team2goal = 0
        t2goals.innerHTML = team2goal

        resetNum++
        resets.innerHTML = resetNum
        resetSound.play()
    })

}


team1Shoot()
team2Shoot()
resetButton()