/*
Ici on code la logique de discussion, en alternant les dialogs et les choices
*/

let discution = ["Salutations"];
let currentDialogSuiteIndex = 0;
let currentDialogSuite = generateDialogSuiteFromName(discution[0]);

buddySay(Object.values(currentDialogSuite[currentDialogSuiteIndex])[0])

function nextDialog() {
    // Goes to the next dialog
    currentDialogSuiteIndex++;

    if (currentDialogSuiteIndex > currentDialogSuite.length) {
        //TODO: passer à la dialogSuite suivante dans discution
        buddySay("<Rien de plus à dire>")
        return;
    }

    if (currentDialogSuiteIndex < currentDialogSuite.length) {
        let dialogType = getDialogType(currentDialogSuite[currentDialogSuiteIndex]);

        switch (dialogType) {
            case "d":
                console.log(currentDialogSuite);
                buddySay(Object.values(currentDialogSuite[currentDialogSuiteIndex])[0]);
                break;
            case "c":
                let choiceID = Object.keys(currentDialogSuite[currentDialogSuiteIndex])[0];
                displayChoice(getChoice(choiceID));
                break;
            case "m":
                Object.values(currentDialogSuite[currentDialogSuiteIndex])[0]();
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
