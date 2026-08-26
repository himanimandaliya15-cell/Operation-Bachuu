// ===========================================
// FL PRODUCER STUDIO v2.0
// Hetav Edition ❤️
// ===========================================

// Instruments
const tracks = [
"Kick",
"Snare",
"HiHat",
"Bass"
];

// Audio IDs
const sounds = [
"kick",
"snare",
"hihat",
"bass"
];

// Sequencer settings
const TOTAL_STEPS = 16;

let playing = false;
let loopEnabled = false;
let step = 0;
let interval = null;

// ===========================================
// BUILD SEQUENCER
// ===========================================

window.onload = function(){

const sequencer = document.getElementById("sequencer");

tracks.forEach((track,row)=>{

let label=document.createElement("div");
label.className="track";
label.innerHTML=track;
sequencer.appendChild(label);

// 16 Steps

for(let i=0;i<TOTAL_STEPS;i++){

let pad=document.createElement("div");

pad.className="step";

pad.dataset.row=row;
pad.dataset.col=i;

pad.onclick=function(){

pad.classList.toggle("active");

};

sequencer.appendChild(pad);

}

});

// Background Music

const bg=document.getElementById("memory");

if(bg){

bg.volume=.25;

bg.play().catch(()=>{});

}

};

// ===========================================
// PLAY SINGLE SOUND
// ===========================================

function playSound(id){

const audio=document.getElementById(id);

if(!audio) return;

audio.currentTime=0;

audio.play();

}

// Piano Keys

function playPiano(id){

playSound(id);

}

// Loop Button

function toggleLoop(){

loopEnabled=!loopEnabled;

const btn=document.getElementById("loopBtn");

if(loopEnabled){

btn.innerHTML="🟢 LOOP ON";
btn.style.background="#00b894";

}else{

btn.innerHTML="🔁 LOOP OFF";
btn.style.background="#ff9800";

}

}
// ===========================================
// PLAY ENGINE
// ===========================================

function playBeat(){

if(playing) return;

playing = true;

document.getElementById("status").innerHTML = "▶ Playing";

step = 0;

interval = setInterval(function(){

// Remove previous playhead

document.querySelectorAll(".step").forEach(box=>{

box.classList.remove("playhead");

});

// Current column

let currentColumn = step;

// Highlight playhead

document.querySelectorAll(".step").forEach(box=>{

if(Number(box.dataset.col)===currentColumn){

box.classList.add("playhead");

}

});

// Play active pads

document.querySelectorAll(".step.active").forEach(box=>{

if(Number(box.dataset.col)===currentColumn){

let sound = sounds[box.dataset.row];

let audio = document.getElementById(sound);

if(audio){

let slider = document.getElementById("vol"+box.dataset.row);

audio.volume = slider.value/100;

audio.currentTime = 0;

audio.play();

}

}

});

// Animate mixer meters

for(let i=0;i<4;i++){

let meter = document.getElementById("meter"+i);

meter.style.height = (20+Math.random()*80)+"%";

}

step++;

if(step>=TOTAL_STEPS){

if(loopEnabled){

step = 0;

}else{

stopBeat();

}

}

},180);

}



// ===========================================
// STOP ENGINE
// ===========================================

function stopBeat(){

playing = false;

clearInterval(interval);

document.getElementById("status").innerHTML = "■ Stopped";

// Remove playhead

document.querySelectorAll(".step").forEach(box=>{

box.classList.remove("playhead");

});

// Reset meters

for(let i=0;i<4;i++){

document.getElementById("meter"+i).style.height="10%";

}

// Stop all sounds

document.querySelectorAll("audio").forEach(audio=>{

audio.pause();

audio.currentTime=0;

});

}
// ===========================================
// EXPORT PROJECT
// ===========================================

function renderProject(){

stopBeat();

document.getElementById("renderPanel").style.display="block";

document.getElementById("status").innerHTML="💾 Rendering Project...";

let bar=document.getElementById("renderBar");

let progress=0;

const render=setInterval(function(){

progress++;

bar.style.width=progress+"%";

document.getElementById("screen").innerHTML=

"> Rendering Audio Engine...<br><br>"

+"> "+progress+"% Completed";

if(progress>=100){

clearInterval(render);

const drop=document.getElementById("drop");

drop.currentTime=0;

drop.play();

setTimeout(function(){

const victory=document.getElementById("victory");

victory.currentTime=0;

victory.play();

document.getElementById("status").innerHTML=

"✔ EXPORT SUCCESSFUL";

document.getElementById("screen").innerHTML=

"🎧 PROJECT EXPORTED<br><br>"

+"Track : Forever With You ❤️<br>"

+"Producer : Hetav<br>"

+"Dedicated To : Himani";

document.getElementById("finalMessage").style.display="block";

// Save Mission

localStorage.setItem("mission6","completed");

// Confetti

confettiEffect();

setTimeout(function(){

window.location.href="dashboard.html";

},7000);

},1500);

}

},40);

}



// ===========================================
// CONFETTI
// ===========================================

function confettiEffect(){

for(let i=0;i<120;i++){

let conf=document.createElement("div");

conf.innerHTML=["🎉","✨","🎵","","","",][Math.floor(Math.random()*4)];

conf.style.position="fixed";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-30px";

conf.style.fontSize=(18+Math.random()*18)+"px";

conf.style.transition="5s linear";

conf.style.zIndex="9999";

document.body.appendChild(conf);

setTimeout(function(){

conf.style.top="110vh";

conf.style.transform="rotate(720deg)";

},20);

setTimeout(function(){

conf.remove();

},5200);

}

}



// ===========================================
// SPLASH SCREEN
// ===========================================

setTimeout(function(){

document.getElementById("screen").innerHTML=

"🎧 FL PRODUCER STUDIO<br><br>"

+"Welcome Producer Hetav ❤️<br><br>"

+"Powered By Himani";

},2500);



// ===========================================
// RANDOM STUDIO TIPS
// ===========================================

const studioTips=[

"🎵 Every beat starts with one click.",

"🎹 Music is your superpower.",

"🥁 Great producers never stop learning.",

"🎧 Trust your ears.",

"❤️ Made with love by Himani."

];

let tipIndex=0;

setInterval(function(){

if(!playing){

document.getElementById("screen").innerHTML=

studioTips[tipIndex];

tipIndex++;

if(tipIndex>=studioTips.length){

tipIndex=0;

}

}

},9000);



// ===========================================
// SECRET MISSION X
// ===========================================

document.querySelector(".logo").addEventListener("dblclick",function(){

const victory=document.getElementById("victory");

if(victory){

victory.currentTime=0;

victory.play();

}

document.getElementById("screen").innerHTML=

"🔓 Hidden Files Found...<br><br>"

+"Decrypting Mission X...<br><br>"

+"██████████ 100%";

document.getElementById("status").innerHTML="🔐 Access Granted";

setTimeout(function(){

window.location.href="secret.html";

},2500);

});



// ===========================================
// MOBILE VIBRATION
// ===========================================

if(navigator.vibrate){

document.querySelectorAll(".step").forEach(step=>{

step.addEventListener("click",function(){

navigator.vibrate(20);

});

});

}