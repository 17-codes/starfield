/** @type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

class Star {
  constructor() {
    this.size = 1;
    this.count = 10;
    this.speed = 10;
    this.stars = [];
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;
  }
  generator() {}
  update() {
    this.x += this.speed;
    this.stars.unshift(this.addStar);
    this.stars.length = 10;

    // console.log(this.stars);
  }
  draw() {
    this.stars.forEach((star) => star(this));
  }
  addStar(that) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(that.x, that.y, that.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// let speed = 5;
// let count = 100;
// let size=1;
// let stars=[];
// for(let i=0;i<100;i++){
//     stars.push[]
// }

// let x = Math.random() * canvas.width;
// let y = Math.random() * canvas.height;
// let z = Math.random() * canvas.width;

let star = new Star();
for (i = 0; i < 10; i++) {
  star.update();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  star.update();
  //   star.draw();
  requestAnimationFrame(animate);
}

animate();
