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
poseNet=ml5.poseNet(webcam,modelLoaded);
poseNet.on("pose",gotPoses);


}

function modelLoaded(){
    console.log("modelLoaded");
}

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;
function gotPoses(results){

    if(results.length>0){
rightWristX=results[0].pose.rightWrist.x
rightWristY=results[0].pose.rightWrist.y

leftWristY=results[0].pose.leftWrist.x
leftWristY=results[0].pose.leftWrist.y

console.log("Right wrist X = "+rightWristX+"Right Wrist Y = "+rightWristY);
console.log("Left wrist X = "+leftWristX+"Left Wrist Y = "+leftWristY);
    }

}





function draw(){
    image(webcam,0,0,650,500);
}

