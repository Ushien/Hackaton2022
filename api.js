/*
Ici on code les communications avec la DB
*/

let mock = [
    {
        id: "12345",
        name: "Albert",
        age: "69",
        memory: {
            date: "10/11/2012",
            type: "Flashback",
            text: "Je me rappelle de ce jour où je suis allé à la foire avec mon chien Tango. C'était marrant... Je suis vieux...."
        }
    }
];

function getUnknownMemory() {
    return mock[0];
}
