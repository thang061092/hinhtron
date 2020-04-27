let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 20,y = 20;
let dx=11,dy=3;
let radius=10;
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0, 0,canvas.width,canvas.height);
    drawCircle();
    if(x-radius<0||x+radius>canvas.width){
        dx= -dx;
    }
    if(y-radius<0|| y+radius>canvas.height){
        dy=-dy;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(draw)
}
draw();