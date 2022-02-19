/*
Ici on code la boîte de dialogue et son affichage
*/

let tempsList = ["un mois", "un an", "dix ans"]
// Retourne une période au hasard parmi les différentes périodes dans la variable temps.

let activitésList = ["du tricot", "du coloriage", "une partie d'échec"]
// Retourne une activité au hasard parmi les différentes activités dans la variable activité.

let activité = pickInList(activitésList);
let temps = pickInList(tempsList);

dialogs = {
    "default" : {
        "d001" : ["Salut", "Bonjour", "Coucou", "Quelle belle journée"],
        "d006" : ["Bonne nuit", "A bientôt", "Au revoir", "A demain", "Passez une bonne journée"]
    },
    "HT" : {
        "d002" : ["Cela fait longtemps qu'on s'est pas vu", "Comment vas-tu ?", "Comment se passe ta journée ?", "Comment te sens-tu ?", "Est-ce que tu t'es senti en sécurité aujourd'hui ?", "Est-ce que tu t'es senti en seul ?", "As-tu eu de la visite récemment ?", "J'ai bien dormi et toi ?"],
        "d003" : ["Ajourd'hui tu pourrais faire " + activité, "Et si tu tentais" + activité+" ?", "Quelle belle journée pour faire " + activité],
        "d004" : ["As-tu fait une nouvelle activité aujourd'hui ?", "Désire-tu me partager un de tes souvenirs ?", "Qu'as-tu appris aujourd'hui ?","Quel a été ton meilleur moment de la journée", "En quoi cette journée a été spécial pour toi ?"],
        "d005" : ["Il y a " + temps + ", tu m'avais raconté que tu avais fait " + activité, "Quelle belle journée tu as eu !","Est-ce que tu te souviens de ce souvenir raconté il y a " + temps, "Telle personne a passé une journée similaire, voudrais-tu discuter avec elle"]
    },
    "HV" : {
        "d002" : ["Cela fait longtemps qu'on s'est pas vu", "Comment allez-vous ?", "Comment se passe votre journée ?", "Comment vous sentez-vous ?", "Vous êtes-vous senti en sécurité aujourd'hui ?", "Vous êtes-vous senti seul ?", "Avez-vous eu de la visite récemment ?", "J'ai bien dormi et vous ?"],
        "d003" : ["Ajourd'hui vous pourriez faire " + activité, "Et si vous tentiez" + activité+" ?", "Quelle belle journée pour faire "+ activité],
        "d004" : ["Avez-vous fait une nouvelle activité aujourd'hui ?", "Désirez-vous me partager un de vos souvenirs ?", "Qu'avez-vous appris aujourd'hui ?", "Quel a été votre meilleur moment de la journée", "En quoi cette journée a été spécial pour vous ?"],
        "d005" : ["Il y a " + temps + ", vous m'aviez raconté que vous aviez fait " + activité, "Quelle belle journée vous as eu !", "Est-ce que vous souvenez-vous de ce souvenir raconté il y a x temps", "Telle personne a passé une journée similaire, voudriez-vous discuter avec elle"]
    },
    "FT" : {

     },
     "FV" : {

     }
}

dialogSuites = {
        "Salutations" : ["d001", "d002", {"c001": {1:["d003"], 2:["d003"]}}],
        "Au revoir" : ["d004", "d005", "d001"]
}

function getDialog(ID) {
    if (dialogs[getUserType()][ID] == undefined) {
        console.assert(dialogs["default"][ID] != undefined, "dialog is undefined : "+ID+", type: "+getUserType());
        return dialogs["default"][ID];
    }
    return dialogs[getUserType()][ID];
}

const facts = ["J'ai été marcher dans les bois, je me suis perdu", "J'ai eu la visite de ma famille", "J'ai préparé un tarte elle était délicieuse", "J'ai tricoté un pull", "J'ai regardé un film", "J'ai lu un livre, il était nul", "J'ai été faire des courses"]
function get_random_fact(facts_array){
    let fact =pick(facts_array)
    return fact
}
