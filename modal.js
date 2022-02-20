function newFlashbackModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="flashback">C\'est l\'heure de raconter un souvenir !</label><textarea class="form-control" rows="15" id="flashback"></textarea><input type="button" class = doneButton value="Fini !" onclick="sendFlashbackResult()"></input></form></div>')
    $("#monP").text();
    $("#staticBackdrop").modal("show");
}

function sendFlashbackResult(){
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Flashback"
    newData["memory"]["text"] = $("#flashback").val()
    myMemories.push(newData)
    $("#staticBackdrop").modal("hide");
    //console.log(myMemories)
}

function newHappyThoughtModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="happy">C\'est l\'heure de raconter une pensée positive !</label><textarea class="form-control" rows="15" id="happy"></textarea><input type="button" class = doneButton value="Fini !" onclick="sendHappyThoughtsResult()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function sendHappyThoughtsResult(e){
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "HappyThoughts"
    newData["memory"]["text"] = $("#happy").val()
    myMemories.push(newData)
    $("#staticBackdrop").modal("hide");
    //console.log(myMemories)
}

function newLearningModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="learning">C\'est l\'heure de raconter une nouvelle connaissance !</label><textarea class="form-control" rows="15" id="learning"></textarea><input type="button" class = doneButton value="Fini !" onclick="sendLearningResult()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function sendLearningResult(e){
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Learning"
    newData["memory"]["text"] = $("#learning").val()
    myMemories.push(newData)
    $("#staticBackdrop").modal("hide");
    //console.log(myMemories)
}

function newStoryModal() {
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="flashback">C\'est l\'heure de raconter quelque chose qui s\'est produit aujourd\'hui !</label><textarea class="form-control" rows="15" id="story"></textarea><input type="button" value="Fini !" onclick="sendStoryResult()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function sendStoryResult(e){
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Story"
    newData["memory"]["text"] = $("#story").val()
    myMemories.push(newData)
    $("#staticBackdrop").modal("hide");
}

function showCommuMemoryModal() {
    let memory = getUnknownMemory();
    $(".modal-body").replaceWith('<div class="modal-body"><div class="form-group"><label for="flashback">Le souvenir du jour de '+memory.name+'</label>'+memory["memory"]["text"]+'<input type="button" value="Fini !" onclick="sendFlashbackResult()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function showNewMemoryModal(memory) {
    // let memory = "Test pardi !"
    $(".modal-body").replaceWith(memory)
    $("#staticBackdrop").modal("show");
}

function inputNameModal(){
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="nameInput">Ecrivez-moi votre nom ce dessous. Je parie qu\'il est magnifique !</label><input type="text" class="form-control" id="nameInput"></textarea><input type="button" value="Fini !" onclick="sendName()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function sendName(){
    userInfo["name"] = $("#nameInput").val()
    $("#staticBackdrop").modal("hide");
    console.log(userInfo)
}

function inputAgeModal(){
    $(".modal-body").replaceWith('<div class="modal-body"><form class="form-group"><label for="ageInput">J\'aurais besoin de votre âge !</label><input type="number" class="form-control" id="ageInput"></textarea><input type="button" value="Fini !" onclick="sendAge()"></input></form></div>')
    $("#staticBackdrop").modal("show");
}

function sendAge(){
    userInfo["age"] = $("#ageInput").val()
    $("#staticBackdrop").modal("hide");
    console.log(userInfo)
}

modals = {
    "m001": newFlashbackModal,
    "m002": newHappyThoughtModal,
    "m003": newLearningModal,
    "m004": newStoryModal,
    "m005": showCommuMemoryModal,
    "m006": inputNameModal,
    "moo7": inputAgeModal
}