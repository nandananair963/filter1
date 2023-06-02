noseX=0;
noseY=0;

function home(){
  window.location.replace('index.html')
}


function preload(){
clown_nose = loadImage('https://i.postimg.cc/qRmvLkDd/mustache.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,300,300);
image(clown_nose, noseX-40,noseY+10, 80,40);

}

function take_snapshot(){
  save('myfilter.png');
}

function modelLoaded(){
  console.log("PoseNet is initialised");
}

function gotPoses(results){
if(results.length > 0){
  console.log(results);
  noseX=results[0].pose.nose.x;
  noseY=results[0].pose.nose.y;
  console.log("Nose x = " + noseX);
  console.log("Nose y = " + noseY);  
}
}