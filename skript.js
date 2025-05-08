let winner;
let player = "x";
let game = false;
const separator = document.querySelector(".separator");
const xcur = document.querySelector('.xcur')
const ocur = document.querySelector('.ocur')
const button = document.querySelector('.btn-1')
const btns = document.querySelectorAll('.btn')
const rows = document.querySelector('.rows')

const container = document.querySelector(".container")

const body = document.querySelector('body')
body.addEventListener('mousemove', function(event){
    if (game) {
        if (event.target.className !== 'btn-1'
            && event.target.className !== 'body'
        ){
            const x = event.clientX
            const y = event.clientY
            event.target.style.cursor = 'none'
            if (player === 'x'){
                xcur.style.display = 'flex'
                xcur.style.position = 'absolute'
                xcur.style.left = x + 'px'
                xcur.style.top = y + 'px'
            }
            else if (player === 'o'){
                ocur.style.display = 'flex'
                ocur.style.position = 'absolute'
                ocur.style.left = x + 'px'
                ocur.style.top = y + 'px'
            }
            
        }
        else {
            xcur.style.display = 'none'
            ocur.style.display = 'none'
        }
    }
    else {
        if (event.target.className !== 'btn-1')
            event.target.style.cursor = 'auto'
    }
        
}) 

button.addEventListener('click', function(event) {
    if (button.innerHTML === 'Start'){
        game = true
        btns.forEach(btn => {
            btn.style.pointerEvents = 'auto'
            btn.style.opacity ='1'
        })
        button.innerHTML = 'Reset'
    }
    else if (button.innerHTML === 'Reset'){
        game = false
        player = 'x'
        btns.forEach((btn) => {
            btn.style.pointerEvents = 'none'
            btn.style.opacity ='0.7'
            btn.style.backgroundImage = "";
        })
        button.innerHTML = 'Start'
        separator.style.display = 'none'
    }
    
})

container.addEventListener('click', function(event){
    if (game){
        if (event.target.className === 'btn' &&
            event.target.style.backgroundImage === ''){
            if (player === 'x'){
                event.target.style.backgroundImage = "url('x.png')"
                player = 'o'
                xcur.style.display = 'none'
            }
                

            else if (player === 'o'){
                event.target.style.backgroundImage = "url('o.png')"
                player = 'x'
                ocur.style.display = 'none'
            }
            checkWinner()
        } 
    }
})

function checkWinner(){
    const b00 = document.querySelector('#b00').style.backgroundImage
    const b01 = document.querySelector('#b01').style.backgroundImage
    const b02 = document.querySelector('#b02').style.backgroundImage
    const b10 = document.querySelector('#b10').style.backgroundImage
    const b11 = document.querySelector('#b11').style.backgroundImage
    const b12 = document.querySelector('#b12').style.backgroundImage
    const b20 = document.querySelector('#b20').style.backgroundImage
    const b21 = document.querySelector('#b21').style.backgroundImage
    const b22 = document.querySelector('#b22').style.backgroundImage

    if ((b00 === b01 && b00 === b02 && b00 !== '') ||
        (b10 === b11 && b10 === b12 && b10 !== '') ||
        (b20 === b21 && b20 === b22 && b20 !== '') ||
        (b00 === b10 && b00 === b20 && b00 !== '') ||
        (b01 === b11 && b01 === b21 && b01 !== '') ||
        (b02 === b12 && b02 === b22 && b02 !== '') ||
        (b00 === b11 && b00 === b22 && b00 !== '') ||
        (b02 === b11 && b02 === b20 && b02 !== '')){
            switch(player){
                case('o'):
                separator.innerHTML = "X Wins!"
                break;
                case('x'):
                separator.innerHTML = "O Wins!"
            }
            separator.style.display = 'flex'
            btns.forEach((btn) => {
                btn.style.pointerEvents = 'none'
                btn.style.opacity ='0.6'
            })
            game = false

    }

}
