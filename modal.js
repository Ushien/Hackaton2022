let modalDisplayed = false;

function newFlashbackModal() {
    $("#sendMemory").click((e) => {
        sendFlashbackResult(e);
    })
    $("#modal1").modal("show");
    modalDisplayed = true;
}

function sendFlashbackResult(e){
    e.stopPropagation();
    e.preventDefault();
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Flashback"
    newData["memory"]["text"] = $("#memoryInput").val()
    myMemories.push(newData);
    $("#memoryInput").val("");
    $("#memoryList").append('<li>' + newData["memory"]["date"] + " : " + $("#memoryInput").val() +'</li>');
    $("#modal1").modal("hide");
    modalDisplayed = false;
}

function newHappyThoughtModal() {
    $("#sendMemory").click(() => {
        sendHappyThoughtsResult();
    })
    $("#modal1").modal("show");
    modalDisplayed = true;
}

function sendHappyThoughtsResult(e){
    e.stopPropagation();
    e.preventDefault();
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "HappyThoughts"
    newData["memory"]["text"] = $("#memoryInput").val()
    myMemories.push(newData);
    $("#memoryInput").val("");
    $("#memoryList").append('<li>' + newData["memory"]["date"] + " : " + $("#memoryInput").val() +'</li>');
    $("#staticBackdrop").modal("hide");
    modalDisplayed = false;
}

function newLearningModal() {
    $("#sendMemory").click(() => {
        sendLearningResult();
    })
    $("#modal1").modal("show");
    modalDisplayed = true;
}

function sendLearningResult(e){
    e.stopPropagation();
    e.preventDefault();
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Learning"
    newData["memory"]["text"] = $("#memoryInput").val()
    myMemories.push(newData);
    $("#memoryInput").val("");
    $("#memoryList").append('<li>' + newData["memory"]["date"] + " : " + $("#memoryInput").val() +'</li>');
    $("#staticBackdrop").modal("hide");
    modalDisplayed = false;
}

function newStoryModal() {
    $("#sendMemory").click(() => {
        sendStoryResult();
    })
    $("#modal1").modal("show");
    modalDisplayed = true;
}

function sendStoryResult(e){
    e.stopPropagation();
    e.preventDefault();
    let newData = {id: generateID(), name : userInfo["name"], age: userInfo["age"], memory : {}}
    newData["memory"]["date"] = new Date()
    newData["memory"]["type"] = "Story"
    newData["memory"]["text"] = $("#memoryInput").val()
    myMemories.push(newData);
    $("#memoryInput").val("");
    $("#memoryList").append('<li>' + newData["memory"]["date"] + " : " + $("#memoryInput").val() +'</li>');
    $("#staticBackdrop").modal("hide");
    modalDisplayed = false;
}

function showCommuMemoryModal() {
    let memory = getUnknownMemory();
    $("#memorySenderName").text(memory.name);
    $("#memorySenderAge").text(memory.age);
    $("#memoryParagraph").text(memory.memory.text);
    $("#modal2").modal("show");
    modalDisplayed = true;
}

function hideCommuMemoryModal() {
    $("#modal2").modal("hide");
    modalDisplayed = false;
}

function inputNameModal(){
    $("#modal3").modal("show");
    modalDisplayed = true;
}

function sendName(){
    userInfo["name"] = $("#nameInput").val()
    $("#modal3").modal("hide");
    modalDisplayed = false;
}

function inputAgeModal(){
    $("#modal4").modal("show");
    modalDisplayed = true;
}

function sendAge(){
    userInfo["age"] = $("#ageInput").val()
    $("#modal4").modal("hide");
    modalDisplayed = false;
}

modals = {
    "m001": newFlashbackModal,
    "m002": newHappyThoughtModal,
    "m003": newLearningModal,
    "m004": newStoryModal,
    "m005": showCommuMemoryModal,
    "m006": inputNameModal,
    "m007": inputAgeModal
}
