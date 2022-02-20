/*
Ici on code notre mascotte, avec ses animations et émotions
*/

let animations = {
    "a001": (() => displayBuddy("happy", "jump")),
}

let talking = false;
let currentDialog = "";
let intervalID = 0;

new rive.Rive({
    // Hosted .riv asset, or a local one
    src: "./roberto.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true
  });


function buddySay(dialog) {
  let i = 0;
  let text = "";
  talking = true;
  currentDialog = dialog;
  intervalID = setInterval(()=>{
      if (i < dialog.length) {
          text += dialog[i]
          $("#dialog").text(text);
          i++;
      }
      else {
          talking = false;
          currentDialog = "";
          clearInterval(intervalID);
      }
    }
    , 30);
}

function speedDialog() {
    $("#dialog").text(currentDialog);
    talking = false;
    currentDialog = "";
    clearInterval(intervalID);
}

const emotions = ["happy", "sad"]


function displayBuddy(emotion){
    if(emotion == "question"){
        $("#buddyContainer").replaceWith('<div id="buddyContainer"><img id="buddy" src="buddy/question.png"> </div>')
    }
    if(emotion == "sleep"){
        $("#buddyContainer").replaceWith('<div id="buddyContainer"><img id="buddy" src="buddy/sleep.png"> </div>')
    }
    if(emotion == "content"){
        $("#buddyContainer").replaceWith('<div id="buddyContainer"><img id="buddy" src="buddy/happy.png"> </div>')
    }
    if(emotion == "wink"){
        $("#buddyContainer").replaceWith('<div id="buddyContainer"><img id="buddy" src="buddy/oeil.png"> </div>')
    }
    if(emotion == "neutral"){
        $("#buddyContainer").replaceWith('<div id="buddyContainer"><img id="buddy" src="buddy/roberto.png"> </div>')
    }

}

let dialogEmotions = {
    "question": [],
    "content": [],
    "wink": [],
    "sleep": []
}

displayBuddy("happy", "jump")
