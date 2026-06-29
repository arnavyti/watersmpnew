// =============================
// Water Community Script
// =============================

// Loader
window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.style.display = "none";

},500);

},1200);

});

// Copy Discord Invite

const copy = document.getElementById("copy");

if(copy){

copy.onclick = () => {

navigator.clipboard.writeText("https://discord.gg/JdrdgJUUKZ");

copy.innerHTML = "Copied!";

setTimeout(()=>{

copy.innerHTML="discord.gg/JdrdgJUUKZ";

},2000);

};

}

// Countdown
// Change this date to your actual launch date

const launchDate = new Date("July 6, 2026 19:00:00").getTime();

function countdown(){

const now = new Date().getTime();

const distance = launchDate-now;

if(distance<0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

countdown();

setInterval(countdown,1000);

// Navbar Blur

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

nav.style.position="sticky";

nav.style.top="0";

nav.style.zIndex="999";

nav.style.backdropFilter="blur(15px)";

nav.style.background="rgba(7,19,33,.8)";

}

else{

nav.style.background="transparent";

}

});

// Reveal Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(

".feature-card,.rank-card,.staff-card,.box,.faq details"

).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".6s";

observer.observe(el);

});

// Floating Hero Image

const hero=document.querySelector(".hero-right img");

if(hero){

let y=0;

setInterval(()=>{

y=y===0?-10:0;

hero.style.transform=`translateY(${y}px)`;

},1800);

}

// Buy Button Effect

document.querySelectorAll(".rank-card button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerHTML="Redirecting...";

setTimeout(()=>{

window.location.href="https://discord.gg/JdrdgJUUKZ";

},500);

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Console Message

console.log("%c🌊 Welcome to Water Community","color:#00b7ff;font-size:22px;font-weight:bold;");
