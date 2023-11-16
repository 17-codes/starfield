const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
let stars = [];
let size = 1;
let numStars = 100;
let flength = canvas.width;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

for (let i = 0; i < numStars; i++) {
  stars[i] = new Star();
}

function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.z = Math.random() * canvas.width;

  this.move = function () {
    this.z = this.z - 11;
    if (this.z <= 0) {
      this.z = canvas.width;
    }
  };

  this.show = function () {
    let x = (this.x - centerX) * (flength / this.z);
    x = x + centerX;
    let y = (this.y - centerY) * (flength / this.z);
    y = y + centerY;

    let s = size * (flength / this.z);

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
  };
}

function draw() {
  for (let i = 0; i < numStars; i++) {
    stars[i].show();
    stars[i].move();
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  requestAnimationFrame(update);
}

update();
