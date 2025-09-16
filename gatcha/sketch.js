let body;
let face;
let n;

function preload() {
  body = loadImage('body.png');
  //face = loadImage('1.png');
  
  // get random face
  let n = int(random(1, 5));
  let imgName = n + ".png";  
  face = loadImage(imgName);

}

function setup() {
  createCanvas(400, 400);

  let button = createButton('🤗');
  button.position(10, 10);

  button.mousePressed(() => {
    let n = int(random(1, 5));
    let imgName = n + ".png";
    face = loadImage(imgName);
    console.log(n);
  });  

}

function draw() {
  background('yellow');   

  image(body, 0, 0);
  image(face, 132, 134)
}
