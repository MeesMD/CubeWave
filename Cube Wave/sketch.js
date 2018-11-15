let angle = 0;
let w = 10;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0);
  ortho(-400, 400, -400, 400, 0, 1000);

  rotateX(-QUARTER_PI);
  rotateY(ma);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(z, w, width/2, height/2);
      let offset = map(d, 0, maxD, -2, 2);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 400));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w, h, w + 4);
      pop();
    }
  }
  angle -= 0.06;
}
