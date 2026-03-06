const lines = [
  "Мамо,",
  "Днес е много специален ден за теб.",
  "Днес е Денят на жената..."
];

let index = 0;

function showNextLine() {
  if (index < lines.length) {
    const line = document.createElement("div");
    line.classList.add("line");
    line.innerText = lines[index];
    document.getElementById("text-container").appendChild(line);
    index++;
    setTimeout(showNextLine, 2500);
  } else {
    document.getElementById("btn").style.display = "inline-block";
  }
}

showNextLine();

document.getElementById("btn").onclick = function () {
  const message = document.getElementById("message");
  message.style.opacity = "1";

  // optional: make some extra hearts pop on click
  for (let i = 0; i < 10; i++) {
    createHeart();
  }
};

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s"; // random speed

  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// continuous floating hearts
setInterval(createHeart, 300);