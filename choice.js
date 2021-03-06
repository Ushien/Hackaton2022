/*
Ici on code les boutons de choix
*/

let choices = {
    "default" : {"c001": ["Relativement bien.", "Au top de ma forme!", "Je ne me sent pas aussi bien que d'habitude."],
                "c002": ["Je vais bien.", "Je n'ai pas envie de le dire.", "Je ne me sens pas bien."],
                "c003": ["Il m'est arrivé d'avoir peur.","Tout allait bien."],
                "c005": ["Oui!", "Non, je n'ai vu personne depuis un moment."],
                "c006": ["J'ai très bien dormi merci.", "Je n'ai pas passé une super nuit."],
                "c007": ["C'est une merveilleuse journée!", "C'est juste une journée de plus."],
                "c008": ["C'est une bonne idée, je vais essayer ça aujourd'hui.", "Je note l'idée pour plus tard.", "Cette activité ne me tente pas."],
                "c009": ["Oui.","Non, je n'ai rien fait de nouveau."],
                "c010": ["Oui.","Je n'ai pas d'idée aujourd'hui."],
                "c011": ["Oui, quelle belle journée.", "Je ne m'en souviens pas."],
                "c012": ["Oui, je m'en rappelle.","Ce souvenir ne me dit rien."],
                "c013": ["Je trouve aussi !", "Elle ne m'a pas paru si belle.", "Merci."],
                "c014": ["Oui, pourquoi pas.", "Non, je ne souhaite pas en discuter."],
                "c015": ["Bonjour.","Quel nom curieux!"],
                "c016": ["Je me considère comme un homme.","Je me considère comme une femme."],
                "c017": ["Avec plaisir !","Je préfère que non."],
                "c018": ["input_nom"],
                "c019": ["input_age"],
                "c020": ["Oui, bien sûr!", "Aujourd'hui je n'ai rien à raconter."],
                "c021": ["Oui, je vais te raconter ça.","Je ne préfère pas aujourd'hui."],
                "c022": ["Oui, voilà ce que j'ai appris.","Je n'ai rien à partager sur ce sujet."]
    },
    "HT" : {"c004": ["J'aimerais bien voir plus de monde.", "Je n'ai pas l'impression d'être seul."]
    },
    "HV" : {"c004": ["J'aimerais bien voir plus de monde.", "Je n'ai pas l'impression d'être seul."]
    },
    "FV" : {"c004": ["J'aimerais bien voir plus de monde.", "Je n'ai pas l'impression d'être seule."]
    },
    "FT" : {"c004": ["J'aimerais bien voir plus de monde.", "Je n'ai pas l'impression d'être seule."]
    }
}

function getChoice(ID) {
    if (choices[getUserType()][ID] == undefined) {
        console.assert(choices["default"][ID] != undefined, "choice is undefined : "+ID+", type: "+getUserType());
        return choices["default"][ID];
    }
    return choices[getUserType()][ID];
}

$(".choice").click((e) => {
    /* Click on choice */
    e.stopPropagation();
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
