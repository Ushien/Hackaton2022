/*
Ici on code la boîte de dialogue et son affichage
*/
let dialogs = {
    "HT": {
        
    },
    "HV": {

    },
    "FT": {

    },
    "FV": {

    }
}


function changeDialog(dialog) {
    /*
    Changes the dialog text
    */
    $("#dialog").text(dialog);
}


changeDialog("Salut!");
