for(let i=0;i<80;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(star);

}

document.getElementById("startBtn").onclick=function(){

window.location.href="loading.html";

}