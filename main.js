Webcam.set(
    width: 400,
    height: 400,
    image_format: "png",
    png_quality: 100
)
camera = document.getElementById("cam")
Webcam.attach(cam)
function Take_Photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML = "<img id='result' src= " + data_uri + ">"

    })

}
console.log("ml5.version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3Ub9Gdzg2/model.json",model_loaded)
function model_loaded() {
    console.log("model loaded!")
}