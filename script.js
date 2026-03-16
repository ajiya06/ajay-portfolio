const words = [
"Full Stack Web Developer",
"ECE Student",
"DSA Learner",
"AI & ML Enthusiast"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.getElementById("typing").textContent = currentWord.substring(0,j);

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;

if(i === words.length){
i = 0;
}
}

setTimeout(type,isDeleting ? 60 : 120);
}

type();
