/*
Ici on code les communications avec la DB
*/

let currentID = 1;

let mock = [
    {
        id: 1,
        name: "Albert",
        age: 69,
        memory: {
            date: "10/11/2012",
            type: "Flashback",
            text: "Je me rappelle de ce jour où je suis allé à la foire avec mon chien Tango. C'était marrant... Je suis vieux...."
        }
    }
];

function generateID(){
    currentID = currentID + 1;
    return currentID
}

function getUnknownMemory() {
    return mock[0];
}
