/*
Ici on définit les events (= du code à appeler pendant une discussion)
*/

function isMale() {
    userInfo.genre = "H";
    console.log("H");
}

function isFemale() {
    userInfo.genre = "F";
    console.log("F");
}

function tutoyer() {
    userInfo.preference = "T";
    console.log("T");
}

function vouvoyer() {
    userInfo.preference = "V";
    console.log("V");
}

let events = {
    "e001": isMale,
    "e002": isFemale,
    "e003": tutoyer,
    "e004": vouvoyer
}
