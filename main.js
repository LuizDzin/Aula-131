function preload() {
img = loadImage('dog_cat.jpg')
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    stroke("red")
    textSize(30)
    text("dog", 100, 80);
    text("cat", 330, 90);
    noFill()
    rect(20, 10, 450, 400);
    rect(280, 80, 320 ,320)
}