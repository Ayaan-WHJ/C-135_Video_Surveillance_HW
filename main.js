video = "";
status = "";

function preload()
{
 
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}