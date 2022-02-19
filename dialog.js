/*
Ici on code la boîte de dialogue et son affichage
*/

dialogs = {
       "default" : {"d001" : ["Salut", "Bonjour", "Coucou", "Quelle belle journée"]},

        "HT" : {"d002" : ["Cela fait longtemps qu'on s'est pas vu", "Comment vas-tu ?", "Comment se passe ta journée ?", "Comment te sens-tu ?",
         "Est-ce que tu t'es senti en sécurité aujourd'hui ?", "Est-ce que tu t'es senti en seul ?", "As-tu eu de la visite récemment ?", "J'ai bien dormi et toi ?"]},
        "HV" : {"d002" : ["Cela fait longtemps qu'on s'est pas vu", "Comment allez-vous ?", "Comment se passe votre journée ?", "Comment vous sentez-vous ?",
         "Vous êtes-vous senti en sécurité aujourd'hui ?", "Vous êtes-vous senti seul ?", "Avez-vous eu de la visite récemment ?", "J'ai bien dormi et vous ?"]},

        "HT" : {"d003" : ["Ajourd'hui tu pourrais faire cela", "Et si tu tentais cela ?", "Quelle belle journée pour faire cela"]},
        "HV" : {"d003" : ["Ajourd'hui vous pourriez faire cela", "Et si vous tentiez cela ?", "Quelle belle journée pour faire cela"]},

        "HT" : {"d004" : ["As-tu fait une nouvelle activité aujourd'hui ?", "Désire-tu me partager un de tes souvenirs ?", "Qu'as-tu appris aujourd'hui ?",
         "Quel a été ton meilleur moment de la journée", "En quoi cette journée a été spécial pour toi ?"]},
        "HV" : {"d004" : ["Avez-vous fait une nouvelle activité aujourd'hui ?", "Désirez-vous me partager un de vos souvenirs ?", "Qu'avez-vous appris aujourd'hui ?",
         "Quel a été votre meilleur moment de la journée", "En quoi cette journée a été spécial pour vous ?"]},

        "HT" : {"d005" : ["Il y a x temps, tu m'avais raconté que tu avais fait ceci", "Quelle belle journée tu as eu !",
         "Est-ce que tu te souviens de ce souvenir raconté il y a x temps", "Telle personne a passé une journée similaire, voudrais-tu discuter avec elle"]},
        "HV" : {"d005" : ["Il y a x temps, vous m'aviez raconté que vous aviez fait ceci", "Quelle belle journée vous as eu !",
         "Est-ce que vous souvenez-vous de ce souvenir raconté il y a x temps", "Telle personne a passé une journée similaire, voudriez-vous discuter avec elle"]},

         "default" : {"d006" : ["Bonne nuit", "A bientôt", "Au revoir", "A demain", "Passez une bonne journée"]}
}

dialogSuites = {
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
    let discussion = [];

    for (let index = 0; index < dialogs.length; index++) {
        discussion.push(pick(globalDialogs[userType][dialogs[index]]));
        console.log(globalDialogs[userType][dialogs[index]]);
    }
    return discussion;
}

const facts = ["J'ai été marcher dans les bois, je me suis perdu", "J'ai eu la visite de ma famille", "J'ai préparé un tarte elle était délicieuse", "J'ai tricoté un pull", "J'ai regardé un film", "J'ai lu un livre, il était nul", "J'ai été faire des courses"]
function get_random_fact(facts_array){
    let fact =pick(facts_array)
    return fact
}