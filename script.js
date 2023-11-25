// var audio = new Audio("img_path");
// audio.play();


// it will not work because the result of querySelectorAll is a NodeList, not a single element
// document.querySelectorAll(".music-item").addEventListener("click",function (){
//     alert("I got clicked");
// });

// document.querySelector(".music-item").addEventListener("click",function (){
//     alert("I got clicked");
// });

// Detecting button press
var songButtons = document.querySelectorAll(".music-item");

for (var i = 0; i < songButtons.length; i++) {
    songButtons[i].addEventListener("click", function () {
        // Convert NodeList to array and find the index
        var buttonIndex = Array.from(songButtons).indexOf(this);
        console.log("Index of clicked button: " + buttonIndex);
        makeSound(buttonIndex);
    });
}


function makeSound(key) {

    switch (key) {
        case 0:
            var song = new Audio("music/ik-vaari-aa.mp3");
            song.play();
            break;

        case 1:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        case 2:
            var song2 = new Audio("music/ik-vaari-aa.mp3");
            song2.play();
            break;

        case 3:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        case 4:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        case 5:
            var song1 = new Audio("music/cold-outside.mp3");
            song1.play();
            break;

        case 6:
            var song1 = new Audio("music/shape-of-you.mp3");
            song1.play();
            break;

        case 7:
            var song1 = new Audio("music/unstoppable.mp3");
            song1.play();
            break;

        case 8:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        case 9:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        case 10:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;
            
        case 11:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        case 12:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        case 13:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        case 14:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

        default:
            var song1 = new Audio("music/ik-vaari-aa.mp3");
            song1.play();
            break;

    }

}
