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

function pickInList(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function displayQR(){
    console.log("Il faut ajouter le QR code !")
    $(".modal-body").replaceWith('<div class="modal-body"><img src="prout.png"></div>')
    $("#staticBackdrop").modal("show");
}

let QRcodeButton = document.getElementById(addContactButton)
$("#addContactButton").replaceWith('<button id="addContactButton" class="upperButton" onClick="displayQR()"><i class="bi-person-plus" style="font-size: 3rem; color: white;"></i></button>')