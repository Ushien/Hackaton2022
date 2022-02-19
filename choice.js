/*
Ici on code les boutons de choix
*/

let choices = {
    "default" : {"c001": ["Bonjour.","Quel nom curieux!"],
                "c002": ["Homme","Femme"],
                "c003": ["Oui","Non"],
                "c004": ["Je vais bien.", "Je n'ai pas envie de le dire.", "Je ne me sens pas bien."],
                "c005": ["C'est une merveilleuse journée!", "C'est juste une journée de plus."],
                "c006": ["Relativement bien.", "Au top de ma forme!", "Je ne me sent pas aussi bien que d'habitude."],
                "c007": ["Il m'est arrivé d'avoir peur.","Tout allait bien."],
                "c008": ["J'aimerais bien voir plus de monde.", "Je n'ai pas l'impression d'être seul."],
                "c009": ["Oui.", "Non, je n'ai vu personne depuis un moment."],
                "c010": ["J'ai très bien dormi merci.", "Je n'ai pas passé une super nuit."],
                "c011": ["C'est une bonne idée, je vais essayer ça aujourd'hui.", "Je note l'idée pour plus tard.", "Cette activité ne me tente pas."],
                "c012": ["Oui.","Non, je n'ai rien fait de nouveau."],
                "c013": ["Oui.","Je n'ai pas d'idée aujourd'hui."],
                "c014": ["Oui, qeulle belle journée.", "Je ne m'en souviens pas."],
                "c015": ["Je trouve aussi !", "Elle ne m'a pas paru si belle.", "Merci."],
                "c016": ["Oui, je m'en rappelle.","Ce souvenir ne me dit rien."],
                "c017": ["Non, je ne souhaite pas en discuter.", "Oui, pourquoi pas."]},
    "FV" : {"c001": ["J'aimerais bien voir plus de monde.", "Je n'ai pas l'impression d'être seule."]},
    "FT" : {"c001": ["J'aimerais bien voir plus de monde.", "Je n'ai pas l'impression d'être seule."]}
}

function getChoice(ID) {
    if (choices[getUserType()][ID] == undefined) {
        console.assert(choices["default"][ID] != undefined, "choice is undefined : "+ID+", type: "+getUserType());
        return choices["default"][ID];
    }
    return choices[getUserType][ID];
}

$(".choice").click((e) => {
    /* Click on choice */
    madeChoice(parseInt($(e.currentTarget).attr("nb")));
});

function displayChoice(choice) {
    /* Displays the choice options */
    for (let index = 1 ; index <= choice.length ; index++) {
        $(".choice"+index).html(choice[index-1]);
        $(".choice"+index).show();
    }
}

function hideChoices() {
    $(".choice").hide()
}


// Choices are hidden at start
hideChoices();
