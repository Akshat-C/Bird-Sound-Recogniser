function start_sound()
{
    navigator.mediaDevices.getUserMedia({
        audio : true
    });
c = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qpm6y7OWJ/model.json", modelReady);
}

function modelReady()
{
    c.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    } else 
    {
        console.log(results);
        bird_name = results[0].label;
        document.getElementById("sound_name").innerHTML = results[0].label;
        perc = results[0].confidence * 100;
        document.getElementById("accuracy").innerHTML = perc.toFixed(2) + " % ";

        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("sound_name").style.color = "rgb("+r+","+ g +"," +b+")";
        document.getElementById("accuracy").style.color = "rgb("+r+","+ g +"," +b+")";
        i1 = document.getElementById("i1");

        if (bird_name == "Eagle")
        {
            i1.src = "Eagle.jpg";
        } else if (bird_name == "Duck")
        {
            i1.src = "Duck.jpg";
        } else if (bird_name == "Owl")
        {
            i1.src = "Owl.jpg";
        } else if (bird_name == "Parrot")
        {
            i1.src = "Parrot.webp";
        } else if (bird_name == "Robin")
        {
            i1.src = "Robin.jpg";
        } else if (bird_name == "Background Noise")
        {
            i1.src = "Prompt.png";
        }
    }
}