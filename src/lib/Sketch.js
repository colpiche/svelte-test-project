let motion = false;
let div;
let slider1;
let slider2;

if (typeof DeviceMotionEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function() {
    DeviceMotionEvent.requestPermission()
      .then(function() {
        console.log('DeviceMotionEvent enabled');

        motion = true;
      })
      .catch(function(error) {
        console.warn('DeviceMotionEvent not enabled', error);
      })
  })
} else {
  // motion = true;
}

function setup() {
  createCanvas(windowWidth, windowHeight / 3);
  textFont("Recursive")
  textAlign(CENTER)
  textSize(100)
  div = createDiv('').size(100, 100);
  div.html('hello');
  div.style('font-size', '300px');

  slider1 = createSlider(200, 700, 200);
  slider1.position(10, 10);
  slider1.style('width', '200px');

  slider2 = createSlider(-10, 0, 0);
  slider2.position(250, 10);
  slider2.style('width', '200px');
}

function draw() {
  if (motion) {

    let fontweight = round(map(abs(radians(rotationX)), 0, 1.5, 300, 1000));

    let fontslant = round(map(abs(radians(rotationY)), 0, 1.5, 0, -15));

    background(0)
    textSize(50)
    div.style('font-weight', fontweight);
    div.style('font-variation-settings', "'slnt' " + fontslant);
    fill(255)
    text('weight: ' + fontweight, width / 2, height / 2 - 50)
    text('slant: ' + fontslant, width / 2, height / 2 + 50)
  } else {
    // something
    div.style('font-weight', slider1.value());
    div.style('font-variation-settings', "'slnt' " + slider2.value());
  }

}