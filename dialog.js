/*
Ici on code la boîte de dialogue et son affichage
*/

dialogs = {
    "default" : {

    },
    "HT" : {
        "d001" : ["Salut toi", "Coucou toi", "Salut mon pote"],
        "d002" : ["Comment va ?", "Tu vas bien ?"],
        "d003" : ["Moi je pète la forme", "Moi c'est cool", "Perso bof"],
    },
    "HV" : {
        "d001" : ["Salut vous", "Coucou vous", "Salut monsieur"]
    }
}

dialogSuites = {
        "Salutations" : ["d001", "d002", {"c001": {1:["d003"], 2:["d003"], 3:["d003"], 4:["d003"]}}],
        "Au revoir" : ["d004", "d005", "d001"]
}

function getDialog(ID) {
    if (dialogs[getUserType()][ID] == undefined) {
        console.assert(dialogs["default"][ID] != undefined, "dialog is undefined : "+ID+", type: "+getUserType());
        return dialogs["default"][ID];
    }
    return dialogs[getUserType()][ID];
}
