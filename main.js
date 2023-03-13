song1=""
song2=""

function preload(){
    song1=loadSound("Bones.mp3");
    song2=loadSound("Lily.mp3");
}

function setup(){
canvas= createCanvas(650,500);
canvas.center;
webcam=createCapture(VIDEO);
webcam.hide();


}





function draw(){
    image(webcam,0,0,650,500);
}

