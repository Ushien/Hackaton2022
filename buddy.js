/*
Ici on code notre mascotte, avec ses animations et émotions
*/

function buddySay(dialog) {
    $("#dialog").text(dialog);
}
const emotions = ["happy", "sad"]


function displayBuddy(emotion, animation){
        $("#buddyContainer").replaceWith('<div id="buddyContainer"><img id="buddy" src="buddy/placeholder.png"> </div>')
}

displayBuddy("happy", "jump")
