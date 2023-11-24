const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = [];

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;
    this.flength = canvas.width;
    this.centerX = canvas.width / 2;
    this.centerY = canvas.height / 2;
    this.size = 1;
    this.speed = 6;
    // console.log((this.x-this.centerX)this );
  }
  update() {
    this.z -= this.speed;
    if (this.z <= 0) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.z = canvas.width;
    }
  }
  draw() {
    let z = this.z;
    let x = (this.x - this.centerX) * (this.flength / this.z);
    x = x + this.centerX;
    // console.log(x);

    let y = (this.y - this.centerY) * (this.flength / this.z);
    y = y + this.centerY;

    let s = this.size * (this.flength / this.z);

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
  }
}
for (let i = 0; i < 110; i++) {
  stars[i] = new Star();
}

let addSpeed = 1;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.draw();
    star.update();
  });
  // stars.forEach((star) => star.update());

  requestAnimationFrame(animate);
}

animate();
