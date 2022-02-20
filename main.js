/*
Ici on fait le lien entre tous les composants de l'appli
*/

let userInfo = {
    genre: "H",
    preference: "T",
    name: "Germain",
    age: 69
}

function getUserType() {
    /* Renvoie "MT", "MV", "FT" ou "FV" */
    return userInfo.genre+userInfo.preference;
}

function pickInList(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function displayQR(){
    $("#modal5").modal("show");
}
