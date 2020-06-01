let i = prompt ("Введите показатель степени");
let x = -200;
function setup() {
  createCanvas(400, 400);
background(100);}

function draw() {
line (0,200,400,200);
line (200,0,200,400);
//point(x+200, 200-pow(x, i));
line(x+200, 200-pow(x, i),x+201, 200-pow((x+1), i));
  //stroke(100+x/2, 0, 100-x/2);
//line(x, 400, x, 400-sin(x)*sin(x)*50);
//line(x, 400-x, x, x);
//line(x+200, 400, x+200, pow(x, i)/100);
x = x + 1
}