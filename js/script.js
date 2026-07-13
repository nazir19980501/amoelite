

const html=document.documentElement;

const btn=document.getElementById("themeBtn");

if(localStorage.theme==="dark"){
html.classList.add("dark");
btn.innerHTML="☀️";
}

btn.onclick=()=>{

html.classList.toggle("dark");

if(html.classList.contains("dark")){
localStorage.theme="dark";
btn.innerHTML="☀️";
}
else{
localStorage.theme="light";
btn.innerHTML="🌙";
}

};

const menu=document.getElementById("mobileMenu");

document.getElementById("menuBtn").onclick=()=>{

menu.classList.toggle("translate-x-full");

};

