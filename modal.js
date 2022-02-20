function newFlashbackModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="flashback">C\'est l\'heure de raconter un souvenir !</label><textarea class="form-control" rows="15" id="flashback"></textarea><input type="button" value="Fini !" onclick="sendFlashbackResult()"></input></form></div>')
    $("#monP").text();
    $("#staticBackdrop").modal("show");
}

function sendFlashbackResult(){
    let newData = $("#flashback").val()
    $("#staticBackdrop").modal("hide");
    myMemories["flashback"].push(newData)
    console.log(myMemories)
}

function newHappyThoughtModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="happy">C\'est l\'heure de raconter une pensée positive !</label><textarea class="form-control" rows="15" id="happy"></textarea><input type="submit" value="Fini !" onclick="sendHappyThoughtsResult()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function sendHappyThoughtsResult(e){
    let newData = $("#happy").val()
    $("#staticBackdrop").modal("hide");
    myMemories["happy"].push(newData)
    console.log(myMemories)
}

function newLearningModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="learning">C\'est l\'heure de raconter une nouvelle connaissance !</label><textarea class="form-control" rows="15" id="learning"></textarea><input type="submit" value="Fini !" onclick="sendLearningResult()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function sendLearningResult(e){
    let newData = $("#learning").val()
    $("#staticBackdrop").modal("hide");
    myMemories["learning"].push(newData)
    console.log(myMemories)
}

function newStoryModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="flashback">C\'est l\'heure de raconter quelque chose qui s\'est produit aujourd\'hui !</label><textarea class="form-control" rows="15" id="story"></textarea><input type="submit" value="Fini !" onclick="sendStoryResult()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function sendStoryModalResult(e){
    let newData = $("#story").val()
    $("#staticBackdrop").modal("hide");
    myMemories["story"].push(newData)
    console.log(myMemories)
}

function showCommuMemoryModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><div class="form-group"><label for="flashback">C\'est l\'heure de raconter un souvenir !</label>'+getUnknownMemory()["memory"]["text"]+'<input type="submit" value="Fini !" onclick="sendFlashbackResult()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function showNewMemoryModal(memory) {
    // let memory = "Test pardi !"
    $(".modal-body").replaceWith(memory)
    $("#staticBackdrop").modal("show");
}

modals = {
    "m001": newFlashbackModal,
    "m002": newHappyThoughtModal,
    "m003": newLearningModal,
    "m004": newStoryModal,
    "m005": showCommuMemoryModal
}
