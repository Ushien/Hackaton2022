/*
Ici on définit les events (= du code à appeler pendant une discussion)
*/

function isMale() {
    userInfo.genre = "H";
    console.log("h")
}

function isFemale() {
    userInfo.genre = "F";
    console.log("f")
}

function tutoyer() {
    userInfo.preference = "T";
    console.log("t")
}

function vouvoyer() {
    userInfo.preference = "V";
    console.log("v")
}

let events = {
    "e001": isMale,
    "e002": isFemale,
    "e003": tutoyer,
    "e004": vouvoyer
}
