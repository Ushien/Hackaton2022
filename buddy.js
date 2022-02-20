/*
Ici on code notre mascotte, avec ses animations et émotions
*/

import rive from "@rive-app/webgl";

new rive.Rive({
    // Hosted .riv asset, or a local one
    src: "https://cdn.rive.app/animations/hackaton2022.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true
  });

function buddySay(dialog) {
    $("#dialog").text(dialog);
}
const emotions = ["happy", "sad"]


function displayBuddy(emotion, animation){
        $("#buddyContainer").replaceWith('<div id="buddyContainer"><img id="buddy" src="buddy/roberto.png"> </div>')
}

displayBuddy("happy", "jump")
