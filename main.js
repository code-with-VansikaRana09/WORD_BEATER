//alert("hi")
// Array of Words
const words = [
  'Cynosure',
  'Ephemeral',
  'Quixotic',
  'Serendipity',
  'Anachronistic',
  'Labyrinthine',
  'Petrichor',
  'Abstentious',
  'Sonorous',
  'Limerence',
  'Accoutrements',
  'Halcyon',
  'Obfuscate',
  'Soliloquy',
  'Zephyr',
  'Reverie',
  'Ethereal',
  'Chiaroscuro',
  'Susurrus',
  'Mellifluous',
  'Lugubrious',
  'Epiphany',
  'Vellichor',
  'Umbra',
  'Aesthete'
];

    let score=0
    let time=6
    let currentWord=document.querySelector("#current-word")
    // console.log(currentWord)
    let wordInput = document.querySelector("#word-input")
    //console.log(wordInput)
    let scoreDisplay = document.querySelector("#score")
    //console.log(scoreDisplay)
    let timeDisplay = document.querySelector("#time")
    let message = document.querySelector("#message")
    function showWords(words){
        const randIndex= Math.floor(Math.random()*words.length)
    //console.log(words[randIndex])
    currentWord.textContent=words[randIndex]
    }
    function matchWord(){
        if(wordInput.value==currentWord.textContent){
           
            return true;
        }else{
            return false;
        }
    }
    function startMatch(){
        if(matchWord()){
            showWords(words)
            wordInput.value=''
            score++
            scoreDisplay.textContent=score
            time=6
            message.textContent="CORRECT!!"
        }else{
            message.textContent="WRONG!!"
        }
    }
    function countTime(){
if(time>0){
   time--
    timeDisplay.textContent=time
     
}
if(time==0) message.textContent="!!GAME OVER!!"
score =0;
scoreDisplay.textContent=score;
    }
function init(){
// console.log("Hello")
showWords(words)
wordInput.addEventListener("input",startMatch)
setInterval(countTime,1000)
}
    // window.addEventListener('DOMContentLoaded',function(){
    //     init()
    // })
    window.addEventListener("DOMContentLoaded",init)