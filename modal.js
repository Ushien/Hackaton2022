function newFlashbackModal() {
    $("#sendMemory").click(() => {
        sendFlashbackResult();
    })
    $("#modal1").modal("show");
}

function sendFlashbackResult(){
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Flashback"
    newData["memory"]["text"] = $("#memoryInput").val()
    myMemories.push(newData)
    $("#memoryList").append('<li>' + newData["memory"]["date"] + " : " + $("#memoryInput").val() +'</li>');;
    $("#modal1").modal("hide");
}

function newHappyThoughtModal() {
    $("#sendMemory").click(() => {
        sendHappyThoughtsResult();
    })
    $("#modal1").modal("show");
}

function sendHappyThoughtsResult(e){
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "HappyThoughts"
    newData["memory"]["text"] = $("#memoryInput").val()
    myMemories.push(newData)
    $("#staticBackdrop").modal("hide");
}

function newLearningModal() {
    $("#sendMemory").click(() => {
        sendLearningResult();
    })
    $("#modal1").modal("show");
}

function sendLearningResult(e){
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Learning"
    newData["memory"]["text"] = $("#memoryInput").val()
    myMemories.push(newData)
    $("#staticBackdrop").modal("hide");
}

function newStoryModal() {
    $("#sendMemory").click(() => {
        sendStoryResult();
    })
    $("#modal1").modal("show");
}

function sendStoryResult(e){
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Story"
    newData["memory"]["text"] = $("#memoryInput").val()
    myMemories.push(newData)
    $("#staticBackdrop").modal("hide");
}

function showCommuMemoryModal() {
    let memory = getUnknownMemory();
    $("#memorySenderName").text(memory.name);
    $("#memorySenderAge").text(memory.age);
    $("#modal-body").text(memory.memory.text);
    $("#modal2").modal("show");
}

function inputNameModal(){
    $("#modal3").modal("show");
}

function sendName(){
    userInfo["name"] = $("#nameInput").val()
    $("#modal3").modal("hide");
}

function inputAgeModal(){
    $("#modal4").modal("show");
}

function sendAge(){
    userInfo["age"] = $("#ageInput").val()
    $("#modal4").modal("hide");
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
