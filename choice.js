/*
Ici on code les boutons de choix
*/

let choices = {
    "default" : {

    },
    "HT" : {
        "c001" : ["Bien bien", "Trop bien", "Super bien", "NUL."],
    },
    "HV" : {
        "c001" : ["Bien bien", "Trop bien", "Super bien", "NUL."],
    }
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
