/*
Ici on code la logique de discussion, en alternant les dialogs et les choices
*/
let discutionPatterns = [
    ["Salutations","Premier_contact","Check-up","Entree_souvenir","Histoire_commune","Au_revoir"]
]
let currentDiscutionIndex = 0;
let currentDiscution = pickInList(discutionPatterns);
let currentDialogSuiteIndex = 0;
let currentDialogSuite = generateDialogSuiteFromName(currentDiscution[currentDiscutionIndex]);

// Say first dialog
buddySay(Object.values(currentDialogSuite[currentDialogSuiteIndex])[0])

function nextDialog() {
    if (getDialogType(currentDialogSuite[Math.max(currentDialogSuiteIndex, 0)]) == "c") {
        // On n'avance pas tant que l'utilisateur fait pas de choix
        return;
    }

    // Goes to the next dialog
    currentDialogSuiteIndex++;

    if (currentDialogSuiteIndex >= currentDialogSuite.length) {
        // On a fini la dialogSuite

        if (currentDiscutionIndex < currentDiscution.length - 1) {
            // Il y a encore d'autres dialogSuites à voir
            currentDiscutionIndex++;
            currentDialogSuiteIndex = -1;
            currentDialogSuite = generateDialogSuiteFromName(currentDiscution[currentDiscutionIndex]);
            nextDialog();
        }
        else {
            // Plus rien à dire
            buddySay("<Rien de plus à dire>")
            return;
        }
    }

    else {
        // On a pas fini la dialogSuite

        let dialogType = getDialogType(currentDialogSuite[currentDialogSuiteIndex]);

        switch (dialogType) {
            case "d":
                buddySay(Object.values(currentDialogSuite[currentDialogSuiteIndex])[0]);
                break;
            case "c":
                let choiceID = Object.keys(currentDialogSuite[currentDialogSuiteIndex])[0];
                displayChoice(getChoice(choiceID));
                break;
            case "m":
                Object.values(currentDialogSuite[currentDialogSuiteIndex])[0]();
                break;
            case "e":
                console.log(currentDialogSuite[currentDialogSuiteIndex]);
                Object.values(currentDialogSuite[currentDialogSuiteIndex])[0]();
                nextDialog();
                break;
        }
    }
}

function madeChoice(nb) {
    /* The user chose option n° nb */
    let choiceID = Object.keys(currentDialogSuite[currentDialogSuiteIndex])[0];
    currentDialogSuite = generateDialogSuiteFromDialogList(currentDialogSuite[currentDialogSuiteIndex][choiceID][nb]);
    currentDialogSuiteIndex = -1;
    nextDialog();
    hideChoices();
}


function getDialogType(dialog) {
    return Object.keys(dialog)[0][0];
}

/*
Vous lui donnez un discussionTheme ("Salutations", "Au revoir")

Il vous renvoie la chaîne de discussions par rapport à ces critères.
*/
function generateDialogSuiteFromName(dialogSuiteName){
    /*
    Reçoit un nom de dialogSuite de dialog.js
    Le converti en une suite de dialogues (choisit la version exacte de chaque dialogue)
    Ex: [{"d001": "Bonjour!"}, {"d002": "Comment ça va ?"}, {"c001": {1: [...], 2: [...]}}]
    */
    let possibleDialogs = dialogSuites[dialogSuiteName];
    let discussion = [];

    for (let dialogID of possibleDialogs) {
        let chosenDialog = dialogID;
        if (dialogID[0] == "d") {
            chosenDialog = {};
            chosenDialog[dialogID] = pickInList(getDialog(dialogID));
        }
        else if (dialogID[0] == "m") {
            chosenDialog = {};
            chosenDialog[dialogID] = modals[dialogID];
        }
        discussion.push(chosenDialog);
    }

    return discussion;
}

function generateDialogSuiteFromDialogList(list) {
    /*
    Reçoit une liste d'ID de dialogues, choices, ...
    Le converti en une suite de dialogues (choisit la version exacte de chaque dialogue)
    Ex: [{"d001": "Bonjour!"}, {"d002": "Comment ça va ?"}, {"c001": {1: [...], 2: [...]}}]
    */
    let discussion = [];

    for (let dialogID of list) {
        let chosenDialog = dialogID;
        if (dialogID[0] == "d") {
            chosenDialog = {};
            chosenDialog[dialogID] = pickInList(getDialog(dialogID));
        }
        else if (dialogID[0] == "m") {
            chosenDialog = {};
            chosenDialog[dialogID] = modals[dialogID];
        }
        discussion.push(chosenDialog);
    }

    return discussion;
}

$("body").click(() => {
    nextDialog();
});
