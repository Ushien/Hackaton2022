/*
Ici on code la logique de discussion, en alternant les dialogs et les choices
*/

let currentIndex = 0;
let currentDiscussion = generateDiscussion("Salutations");

buddySay(currentDiscussion[currentIndex])

function nextDialog() {
    // Goes to the next dialog
    currentIndex++;

    console.log(currentIndex, currentDiscussion);
    console.trace();

    if (currentIndex > currentDiscussion.length) {
        buddySay("<Rien de plus à dire>")
        return;
    }

    if (currentIndex < currentDiscussion.length) {
        if (! isChoice(currentDiscussion[currentIndex])) {
            buddySay(currentDiscussion[currentIndex])
        }

        if (isChoice(currentDiscussion[currentIndex])) {
            let choiceID = Object.keys(currentDiscussion[currentIndex])[0];
            displayChoice(choices[getUserType()][choiceID])
        }
    }
}

function madeChoice(nb) {
    /* The user chose option n° nb */
    let choiceID = Object.keys(currentDiscussion[currentIndex])[0];
    currentDiscussion = generateDiscussionFromDialogList(currentDiscussion[currentIndex][choiceID][nb]);
    currentIndex = -1;
    nextDialog();
    hideChoices();
}


function isChoice(dialog) {
    return typeof dialog != "string";
}

/*
Vous lui donnez un discussionTheme ("Salutations", "Au revoir")

Il vous renvoie la chaîne de discussions par rapport à ces critères.
*/
function generateDiscussion(dialogSuiteName){
    let possibleDialogs = dialogSuites[dialogSuiteName];
    let discussion = [];

    for (let dialogID of possibleDialogs) {
        let chosenDialog = dialogID;
        if (! isChoice(dialogID)) {
            chosenDialog = pickInList(getDialog(dialogID));
        }
        discussion.push(chosenDialog);
    }

    return discussion;
}

function generateDiscussionFromDialogList(list) {
    let discussion = [];

    for (let dialogID of list) {
        let chosenDialog = dialogID;
        if (! isChoice(dialogID)) {
            chosenDialog = pickInList(getDialog(dialogID));
        }
        discussion.push(chosenDialog);
    }

    return discussion;
}

$("body").click(() => {
    nextDialog();
});
