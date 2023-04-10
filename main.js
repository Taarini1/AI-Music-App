song_1status="";
song_2status=""
song1=""
song2=""
scoreLW=0
scoreRW=0

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
    console.log(results);
    if(results.length>0){
rightWristX=results[0].pose.rightWrist.x
rightWristY=results[0].pose.rightWrist.y

leftWristY=results[0].pose.leftWrist.x
leftWristY=results[0].pose.leftWrist.y

console.log("Right wrist X = "+rightWristX+"Right Wrist Y = "+rightWristY);
console.log("Left wrist X = "+leftWristX+"Left Wrist Y = "+leftWristY);
  
 scoreLW=results[0].pose.keypoints[9].score;
 scoreRW=results[0].pose.keypoints[10].score;


}


}





function draw(){
    image(webcam,0,0,650,500);
    fill("red");
    stroke("black");


   statussong_1 =  song1.isPlaying()
   statussong_2 =  song2.isPlaying()

   if(scoreLW>=0.2){
circle(leftWristX,leftWristY,20);
song2.stop();

if(statussong_1==false)   {
    song1.play();
    document.getElementById("song_name").innerHTML="Bones";
}



}

if(scoreRW>=0.2){
    circle(rightWristX,rightWristY,20);  
    song1.stop();
    if(statussong_1==false)   {
        song2.play();
        document.getElementById("song_name").innerHTML="Lily";
    }
    

}
if(scoreLW>=0.2){
    circle(leftWristX,leftWristY,20);  
    song1.stop();
    if(statussong_2==false)   {
        song1.play();
        document.getElementById("song_name").innerHTML="Bones";
    }
    

}


   
}

