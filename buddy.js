/*
Ici on code notre mascotte, avec ses animations et émotions
*/

let animations = {
    "a001": (() => displayBuddy("happy", "jump")),
}

new rive.Rive({
    // Hosted .riv asset, or a local one
    src: "https://cdn.rive.app/animations/hackaton2022.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true
  });

  myInterval = setInterval(buddySay(), 2000);
  function buddySay(dialog) {
    for (i = 0; i < length(dialog); i ++) {
        $("#dialog").text(dialog[i]);
    }
  }
  clearInterval(myInterval);

function buddySay(dialog) {
  let i = 0;
  let text = "";
  myInterval = setInterval(()=>{
      if (i < dialog.length) {
          text += dialog[i]
          $("#dialog").text(text);
          i++;
      }
      else {

      }
    }
    , 30);
}

const emotions = ["happy", "sad"]


function displayBuddy(emotion, animation){
        $("#buddyContainer").replaceWith('<div id="buddyContainer"><img id="buddy" src="buddy/roberto.png"> </div>')
}

displayBuddy("happy", "jump")
