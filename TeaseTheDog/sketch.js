let buttonSpeedUp
let buttonSpeedDown
let buttonTalk

let cx = 0;
let cy = 0;
let cSize = 50;
let vx = 4;
let vy = 4;

var backgroundIMG, dog, ball1, ball2, ball3, ball4, audio, bark
let selectBall
let dogx1, dogx2, dogx3, dogx4

function preload() {
  backgroundIMG = loadImage('background.jpeg')
  dog = loadImage('dog.gif')
  ball1 = loadImage('ball1.png')
  ball2 = loadImage('ball2.png')
  ball3 = loadImage('ball3.png')
  ball4 = loadImage('ball4.png')
  audio = loadSound('audio.m4a');
  bark = loadSound('bark.m4a');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bark.play()

  buttonSpeedDown = createButton('Speed Down!')
  buttonSpeedUp = createButton('Speed Up!');

  buttonSpeedDown.mousePressed(speedDown);
  buttonSpeedDown.style("background", '#ffdbcf')
  buttonSpeedUp.mousePressed(speedUp);
  buttonSpeedUp.style("background", '#ffdbcf')


  buttonTalk = createButton('Turn on Dog Translator')
  buttonTalk.position(60, 170);
  buttonTalk.style("background", '#f7d9fa')
  buttonTalk.mousePressed(talk)


  repositionButtons();

  cx = width / 2;
  cy = height / 2;

  push()
  sizeSlider = createSlider(80, 100);
  sizeSlider.size(120, 30);
  sizeSlider.style('background', 'red');


  sizeSlider.position(50, 80); //ball size

  pop()

  selectBall = createSelect();
  selectBall.position(60, 50)
  selectBall.option('ball1');
  selectBall.option('ball2');
  selectBall.option('ball3');
  selectBall.option('ball4');

}
function talk() {
  audio.play()
}



function speedUp() {
  vx *= 1.1;
  vy *= 1.1;

  vx = constrain(vx, -10, 10);
  vy = constrain(vy, -10, 10);
}

function speedDown() {
  vx *= .9;
  vy *= .9;

  vx = constrain(vx, -10, 10);
  vy = constrain(vy, -10, 10);

  //selectBall.size(20)
}

function draw() {
  background(220);

  image(backgroundIMG, 0, 0, windowWidth, windowHeight)

  push()
  translate(windowWidth / 3 + 100, windowHeight / 4)
  windo()
  pop()

  dogx1 = windowWidth / 2.5
  dogx2 = windowHeight / 2.5 + 5
  dogx3 = windowHeight / 2
  dogx4 = windowHeight / 2
  image(dog, dogx1, dogx2, dogx3, dogx4)
  //eyes()
  tennis()

  push()
  fill('black')
  textSize(15)
  text('Ball Size', sizeSlider.width + 60, sizeSlider.height + 70);

  pop()
  cx += vx;
  cy += vy;

  // Constrain between the edges of screen.
  cx = constrain(cx, 0 + cSize / 2, width - cSize / 2);
  cy = constrain(cy, 0 + cSize / 2, height - cSize / 2);

  if (cx + cSize / 2 >= width || cx - cSize / 2 <= 0) {
    vx *= -1;
  }

  if (cy + cSize / 2 >= height || cy - cSize / 2 <= 0) {
    vy *= -1;
  }



}//=====================================================end draw

function repositionButtons() {

  // Position based on top left

  buttonSpeedDown.position(60, 130);
  buttonSpeedUp.position(170, 130);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repositionButtons();
} //the movement of ball referenced the example https://editor.p5js.org/Luxapodular/sketches/u9lrVEoEs


function tennis() {
  let sel = selectBall.value()
  s = sizeSlider.value()

  if (sel == 'ball1') { image(ball1, cx - 43, cy - 43, s, s) }
  if (sel == 'ball2') { image(ball2, cx - 43, cy - 43, s, s) }
  if (sel == 'ball3') { image(ball3, cx - 43, cy - 43, s, s) }
  if (sel == 'ball4') { image(ball4, cx - 43, cy - 43, s, s) }
}

function windo() {
  push()
  scale(windowWidth / 900)
  fill('#b5dfff')
  noStroke()


  rect(30, 30, 300, 170)


  windowColor = '#c9826d'
  fill(windowColor)
  rect(175, 30, 15, 170)
  rect(30, 120, 300, 15)


  fill('brown')
  rect(30, 30, 300, 20)
  rect(30, 200, 300, 20)
  rect(30, 30, 20, 170)
  rect(320, 30, 20, 190)
  pop()

}


// function eyes() {
//   let x = dogx1*1.15
//   let y = dogx2*1.5
//   let x1 = 450
//   let y1 = 453
//   fill(255);

//   ellipse(x, y, 37);
//   let angle = atan2(y - cy, x - cy);
//   fill(0);
//   ellipse(x + cos(angle + 3.14) * 10, y + sin(angle + 3.14) * 10, 18);

//   fill(255);
//   ellipse(x1, y1, 37);
//   fill(0);
//   ellipse(x1 + cos(angle + 3.14) * 10, y1 + sin(angle + 3.14) * 10, 18);
// } //reference https://editor.p5js.org/elinsterz/sketches/tZoIDzHfK
