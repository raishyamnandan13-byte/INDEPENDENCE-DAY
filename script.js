// 🎉 Confetti
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);

  const colors = ["#ff9933", "#ffffff", "#138808"];
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
  confetti.style.opacity = Math.random();

  setTimeout(() => { confetti.remove(); }, 5000);
}
setInterval(createConfetti, 100);

// 🎆 Fireworks
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 2 + 2;
    this.alpha = 1;
    this.speedX = (Math.random() - 0.5) * 6;
    this.speedY = (Math.random() - 0.5) * 6;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 0.02;
  }
  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

let fireworks = [];
function createFirework() {
  const colors = ["#ff9933", "#ffffff", "#138808"];
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  for (let i = 0; i < 50; i++) {
    fireworks.push(new Firework(x, y, colors[Math.floor(Math.random() * colors.length)]));
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((fw, i) => {
    fw.update();
    fw.draw();
    if (fw.alpha <= 0) {
      fireworks.splice(i, 1);
    }
  });
  requestAnimationFrame(animateFireworks);
}

setInterval(createFirework, 800);
animateFireworks();
