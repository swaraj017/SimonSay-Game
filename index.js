
let gamesequence = [];
let usersequence = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let score = document.querySelector("h3"); 
let btns = ["btn-1", "btn-2", "btn-3", "btn-4"];

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function gameflashbtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}

function levelup() {
    usersequence = []
    level++;
    h2.innerText = `Level Up To ${level}`;
    
    let randinx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randinx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gamesequence.push(randcolor);
    console.log(gamesequence)
    gameflashbtn(randbtn);
}
// function checkans(idx) {

//     if (usersequence[idx] === gamesequence[idx]) {
//         if (usersequence.length == gamesequence.length) {
//             setTimeout(levelup, 1000);
//         }
//     }
//     else {
//         h2.innerText = `Game Over! Press any key to Restart Game`
//         document.querySelector("body").style.color="red";
//         setTimeout(function() {
//             document.querySelector("body").style.color="white";

//         }, 100);
//         resetGame();
//     }
// }
function checkans(idx) {
    
    if (usersequence[idx] === gamesequence[idx]) {
        if (usersequence.length == gamesequence.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        
        h2.innerText = `Game Over! Press any key to Restart Game`;
        score.innerText=`Score : ${level}`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="#141d26";
        score.innerText=""
            }, 2000); // Changed timeout to 1000ms (1 second)
        resetGame();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    usersequence.push(usercolor);
    // console.log(usersequence);
    checkans(usersequence.length - 1);
}
let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function resetGame() {
    gamesequence = [];
    usersequence = [];

    started = false;
    level = 0;
}