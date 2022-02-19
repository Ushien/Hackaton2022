function newFlashbackModal() {
    console.log("CREER MODAL");
    $("#staticBackdrop").toggle();
}

function newHappyThoughtModal() {
    console.log("CREER MODAL");
    $("#staticBackdrop").toggle();
}

function newLearningModal() {
    console.log("CREER MODAL");
    $("#staticBackdrop").toggle();
}

function newStoryModal() {
    console.log("CREER MODAL");
    $("#staticBackdrop").toggle();
}

function commuMemoryModal() {
    console.log("MONTRER MODAL");
}


modals = {
    "m001": newFlashbackModal,
    "m002": newHappyThoughtModal,
    "m003": newLearningModal,
    "m004": newStoryModal,
    "m005": commuMemoryModal
}
