var url = "https://teachablemachine.withgoogle.com/models/rtjbsGvOZ/"
Webcam.attach("#webcam")
Webcam.set({
    width:350,
    height:250,
    image_format:"png",
    png_quality:90
})
function snapShot (){
    Webcam.snap(function(dataUri){
        document.getElementById("result").innerHTML= "<img id = 'image' src = '"+dataUri+"'></img>"
    })
    }
    console.log(ml5.version)
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rtjbsGvOZ/model.json",modelLoaded)

    function modelLoaded(){
        console.log("Modal Loaded")
    }