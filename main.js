status = "";
object = [];
function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
video.hide();
}

function draw()
{
    image(video,0,0,480,380);
    for(i=0;i<object.length;i++)
{
fill("#FF0000");
percent = floor(object[i].confidence * 100);
text(object[i].label + " " + percent + "%",object[i].x + 15, object[i].y +15);
noFill();
stroke("#FF0000");
rect(object[i].x , object[i].y , object[i].width , object[i].height);
}
if (object[i].label == input){
    video.stop();
    objectDetector.detect(gotResult);
    document.getElementById("status").innerHTML= input + " is found";
    var synth = window.speechSynthesis;
    var utterThis =SpeechSynthesisUtterance(input + " was found");
    synth.speak(utterThis)
}
else{
    document.getElementById("status").innerHTML= input + " is not found";
    var synth = window.speechSynthesis;
    var utterThis =SpeechSynthesisUtterance(input + " was not found");
    synth.speak(utterThis)

}
}
function gotResults(error,results)
{
if (error) {
    console.log(error);
}
console.log(results);
object = results;
}

function start()
{
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
    document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}