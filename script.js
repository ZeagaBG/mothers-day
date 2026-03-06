"Мамо.",
"Днес е много специален ден за теб.",
"Днес е Денят на жената..."
];

let index = 0;

function showNextLine(){

if(index < lines.length){

let line = document.createElement("div");
line.classList.add("line");
line.innerText = lines[index];

document.getElementById("text-container").appendChild(line);

index++;

setTimeout(showNextLine, 2500);

}
else{

document.getElementById("btn").style.display="inline-block";

}

}

showNextLine();

document.getElementById("btn").onclick = function(){
document.getElementById("message").style.opacity="1";
}

function createHeart(){

let heart=document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(Math.random()*20+10)+"px";

document.body.appendChild(heart);

setTimeout(()=>{heart.remove()},6000);

}

setInterval(createHeart,300);