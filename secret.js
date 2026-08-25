// ===============================
// Typing Text
// ===============================

const message = `Access Granted...

Welcome, Hetav ❤️

You've completed every mission...

But there's one final mission...

A mission hidden only for you.

Ready to unlock it?`;

let i = 0;

const typing = document.getElementById("typing");
const button = document.getElementById("continueBtn");

function typeText(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeText,40);

    }else{

        button.style.display="inline-block";

    }

}

typeText();


// ===============================
// Continue Button
// ===============================

function showMemory(){

    document.querySelector(".container").style.display="none";

    document.getElementById("memoryPage").style.display="block";

    document.getElementById("bgMusic").play();

}


// ===============================
// Animated Stars
// ===============================

const stars=document.getElementById("stars");

for(let s=0;s<120;s++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.width=(Math.random()*3+1)+"px";

    star.style.height=star.style.width;

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}
// =====================================
// Floating Hearts
// =====================================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="110vh";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="8s linear";

document.body.appendChild(heart);

setTimeout(function(){

heart.style.top="-10vh";

heart.style.transform="rotate(720deg)";

heart.style.opacity="0";

},100);

setTimeout(function(){

heart.remove();

},8500);

}

setInterval(createHeart,700);


// =====================================
// Fade-in paragraphs while scrolling
// =====================================

const paragraphs=document.querySelectorAll(".memoryCard p");

paragraphs.forEach(function(p){

p.style.opacity="0";

p.style.transform="translateY(30px)";

p.style.transition="1s";

});

function revealParagraphs(){

paragraphs.forEach(function(p){

const top=p.getBoundingClientRect().top;

if(top<window.innerHeight-100){

p.style.opacity="1";

p.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",revealParagraphs);

revealParagraphs();


// =====================================
// Memory Photo Animation
// =====================================

const photo=document.querySelector(".memoryPhoto");

if(photo){

photo.style.opacity="0";

photo.style.transform="scale(.8)";

photo.style.transition="1.2s";

window.addEventListener("scroll",function(){

const top=photo.getBoundingClientRect().top;

if(top<window.innerHeight-120){

photo.style.opacity="1";

photo.style.transform="scale(1)";

}

});

}
// =====================================
// GRAND FINALE
// =====================================

function finishMission(){

// Stop background music

const music=document.getElementById("bgMusic");

if(music){

music.pause();

music.currentTime=0;

}

// Save Secret Mission

localStorage.setItem("missionX","completed");

// Dark overlay

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.92)";
overlay.style.display="flex";
overlay.style.flexDirection="column";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.textAlign="center";
overlay.style.zIndex="99999";

overlay.innerHTML=`

<h1 style="font-size:42px;color:#ff77d6;">
🎉 Secret Mission Complete
</h1>

<p style="font-size:24px;margin-top:25px;line-height:1.8;padding:20px;max-width:700px;">

Happy Birthday Bachuu ❤️<br><br>

Thank you for exploring every hidden corner of this little world I made for you.<br><br>

Every mission... every animation... every surprise... every line of code... was created with love.

<br><br>

I hope this gift makes you smile today and every time you visit it.

<br><br>

❤️ Forever Yours,<br>

<b>Himani</b>

</p>

`;

document.body.appendChild(overlay);

// Confetti

for(let i=0;i<180;i++){

let conf=document.createElement("div");

conf.innerHTML=["🎉","✨","🎊","❤️"][Math.floor(Math.random()*4)];

conf.style.position="fixed";
conf.style.left=Math.random()*100+"vw";
conf.style.top="-20px";
conf.style.fontSize=(18+Math.random()*20)+"px";
conf.style.transition="6s linear";
conf.style.zIndex="100000";

document.body.appendChild(conf);

setTimeout(function(){

conf.style.top="110vh";
conf.style.transform="rotate(720deg)";

},30);

setTimeout(function(){

conf.remove();

},6200);

}

// Return to Dashboard

setTimeout(function(){

window.location.href="dashboard.html";

},12000);

}



// =====================================
// Finish Button
// =====================================

const finishBtn=document.createElement("button");

finishBtn.innerHTML="🎁 One last surprise";

finishBtn.style.display="block";
finishBtn.style.margin="40px auto";
finishBtn.style.padding="16px 40px";
finishBtn.style.border="none";
finishBtn.style.borderRadius="40px";
finishBtn.style.background="#ff77d6";
finishBtn.style.color="white";
finishBtn.style.fontSize="20px";
finishBtn.style.cursor="pointer";

finishBtn.onclick = function () {
    window.location.href = "secret3.html";
};

document.querySelector(".memoryCard").appendChild(finishBtn);