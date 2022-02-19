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
    "default":{"d001" : ["Salut", "Bonjour", "Coucou", "Quelle belle journée"],
                "d016" : ["Bonne nuit", "A bientôt", "Au revoir", "A demain", "Passez une bonne journée"],
                "d017" : ["Bonjour, je m'appelle mascotte"],
                "d018" : ["Quel est votre nom?"],
                "d019" : ["Comment souhaitez-vous que je m'adresse à vous?"],
                "d020" : ["Quel âge avez-vous?"],
                "d021" : ["Puis-je vous tutoyer?"],
                "d022" : ["Super!"],
                "d023" : ["Je suis désolé"],
                "d024" : ["Il faudrait remédier à ça"],
                "d026" : ["C'est une bonne chose!"]
    },
    "HV" : {"d002": ["Cela fait longtemps qu'on s'est pas vu"],
            "d003": ["Comment allez-vous ?", "Comment vous sentez-vous ?"],
            "d004": ["Comment se passe votre journée ?"],
            "d005": ["Vous êtes-vous senti en sécurité aujourd'hui ?"],
            "d006": ["Vous êtes-vous senti seul ?"],
            "d007": ["Avez-vous eu de la visite récemment ?"],
            "d008": ["J'ai bien dormi et vous ?"],
            "d009": ["Aujourd'hui vous pourriez faire " + activité, "Et si vous tentiez " + activité+" ?", "Quelle belle journée pour faire "+ activité],
            "d010": ["Avez-vous fait une nouvelle activité aujourd'hui ?", "Qu'avez-vous appris aujourd'hui ?"],
            "d011": ["Désirez-vous me partager un de vos souvenirs ?"],
            "d012": ["Quel a été votre meilleur moment de la journée", "En quoi cette journée a été spéciale pour vous ?"],
            "d013": ["Il y a " + temps + ", vous m'aviez raconté que vous aviez fait " + activité,"Est-ce que vous souvenez-vous de ce souvenir raconté il y a " + temps],
            "d014": ["Quelle belle journée vous as eu !"],
            "d015": ["Telle personne a passé une journée similaire, voudriez-vous discuter avec elle"],
            "d025" : ["Je suis là pour vous y aider!"]
    },
    "HT" : {"d002": ["Cela fait longtemps qu'on s'est pas vu"],
            "d003": ["Comment vas-tu ?", "Comment te sens-tu ?"],
            "d004": ["Comment se passe ta journée ?"],
            "d005": ["Est-ce que tu t'es senti en sécurité aujourd'hui ?"],
            "d006": ["Est-ce que tu t'es senti en seul ?"],
            "d007": ["As-tu eu de la visite récemment ?"],
            "d008": ["J'ai bien dormi et toi ?"],
            "d009": ["Aujourd'hui tu pourrais faire " + activité, "Et si tu tentais" + activité+" ?", "Quelle belle journée pour faire " + activité],
            "d010": ["As-tu fait une nouvelle activité aujourd'hui ?","Qu'as-tu appris aujourd'hui ?"],
            "d011": ["Désire-tu me partager un de tes souvenirs ?"],
            "d012": ["Quel a été ton meilleur moment de la journée", "En quoi cette journée a été spécial pour toi ?"],
            "d013": ["Il y a " + temps + ", tu m'avais raconté que tu avais fait " + activité,"Est-ce que tu te souviens de ce souvenir raconté il y a " + temps],
            "d014": ["Quelle belle journée tu as eu !"],
            "d015": ["Telle personne a passé une journée similaire, voudrais-tu discuter avec elle"],
            "d025" : ["Je suis là pour t'y aider!"]
    }
}

dialogSuites = {
        "Salutations": ["d001"],
        "Check-up": ["d008",{"c006": {1:["d004",{"c007":{1:["d022"],2:["d005",{"c003":{1:["d022"],2:["d023"]}}]}}] ,2:["d003",{"c002":{1:["d026"],2:["d007",{"c005":{1:["d022"],2:["d024"]}}],3:["d006",{"c004":{1:["d025"],2:["d026"]}}]}}]}}],
        "Premiere_interaction": ["d017",{"c015":{1:["d018",{"c018":{1:["d019",{"c016":{1:["d020",{"c019":{1:["d021",{"c017":{1:["d022"],2:["d022"]}}]}}],2:["d020",{"c019":{1:["d021",{"c017":{1:["d022"],2:["d022"]}}]}}]}}]}}],2:["d018",{"c018":{1:["d019",{"c016":{1:["d020",{"c019":{1:["d021",{"c017":{1:["d022"],2:["d022"]}}]}}],2:["d020",{"c019":{1:["d021",{"c017":{1:["d022"],2:["d022"]}}]}}]}}]}}]}}]
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
