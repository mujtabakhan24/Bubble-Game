let score = 0;
let timer = 30;
let hit = 0;


function makebubble() {
let clutter = "";
for (let i = 0; i  <= 71; i++) {
    let rn = Math.floor((Math.random()*10));
     clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runtimer(){
    let timerint = setInterval(function(){
        if(timer > 0){
             timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewhit(){
    hit = Math.floor((Math.random()*10));
    document.querySelector("#hitval").textContent = hit;
}


document.querySelector("#pbtm").addEventListener("click" , function(dets){
   let clickednumber = (Number(dets.target.textContent));
   if(clickednumber === hit){
    increasescore();
    makebubble();
    getnewhit();

   }
});

runtimer();
makebubble();
getnewhit();

