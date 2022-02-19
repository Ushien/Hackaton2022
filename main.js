/*
Ici on fait le lien entre tous les composants de l'appli
*/

let userInfo = {
    genre: "H",
    preference: "T"
}

function getUserType() {
    /* Renvoie "MT", "MV", "FT" ou "FV" */
    return userInfo.genre+userInfo.preference;
}
