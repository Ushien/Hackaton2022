/*
Ici on code la boîte de dialogue et son affichage
*/

globalDialogs = {
        "HT" : {"d001" : ["Salut toi", "Coucou toi", "Salut mon pote"]},
        "HV" : {"d001" : ["Salut vous", "Coucou vous", "Salut monsieur"]}
}

globalDialogs2 = {
        "Salutations" : ["d001"],
        "Au revoir" : ["d004", "d005", "d001"]
}


// Retourne un dialogue au hasard parmi les choix de dialogues.
function pick(dialogArray){
        return dialogArray[Math.floor(Math.random() * dialogArray.length)]
}

/*
Vous lui donnez un userType ("HT", "FT", "HV", "FT")
Vous lui donnez un discussionTheme ("Salutations", "Au revoir")

Il vous renvoie la chaîne de discussions par rapport à ces critères.
*/
function generateDiscussion(userType, discussionTheme){
        let dialogs = globalDialogs2[discussionTheme];
        let discussion = []

        for (let index = 0; index < dialogs.length; index++) {
                discussion.push(pick(globalDialogs[userType][dialogs[index]]))
                console.log(globalDialogs[userType][dialogs[index]])
        }
        return discussion
}
