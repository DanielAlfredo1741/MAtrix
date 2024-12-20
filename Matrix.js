const cvs = document.querySelector('.Matrix')
const ctx = cvs.getContext('2d')

cvs.width = window.innerWidth
cvs.height = window.innerHeight

const sibol = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
const lat = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const num = '1234567890'

let alphabet = sibol + lat + num

// size  and columns calcules
const fontsize = 16
let columns = cvs.width / fontsize

// array drops and loop to control the columns size
const drops = []
for ( let i = 0; i < columns; i++){
    drops[i] = 1
}

// function draw 
let draw = () => {
    ctx.fillStyle = 'rgba( 0, 0, 0, 0.05'
    ctx.fillRect(0, 0, cvs.width,cvs.height)
    
    ctx.fillStyle = '#0f0'
    ctx.font = fontsize + 'px monospace'

    for( let x = 0; x<drops.length;x++){

        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        ctx.fillText(text, x*fontsize, drops[x] * fontsize)

        if (drops[x] * fontsize > cvs.height && Math.random()> 0.975) {
            
            drops[x] = 0
        }
        drops[x]++
    }
}

setInterval(draw, 50)