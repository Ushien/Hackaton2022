/*
Ici on définit les events (= du code à appeler pendant une discussion)
*/

function isMale() {
    userInfo.genre = "H";
}

function isFemale() {
    userInfo.genre = "F";
}

function tutoyer() {
    userInfo.preference = "T";
}

function vouvoyer() {
    userInfo.preference = "V";
}

let events = {
    "e001": isMale,
    "e002": isFemale,
    "e003": tutoyer,
    "e004": vouvoyer
}
