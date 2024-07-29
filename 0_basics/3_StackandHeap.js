// Stack (Primitive Datatype) (Call by value)

let myName = "Sukhman";
let myOfficeName = myName;

// console.log(myName);
// console.log(myOfficeName);

myOfficeName = "Sukhi";

// console.log(myName);
// console.log(myOfficeName);

// Heap (Non Primitive Datatype) (Reference)

let myInfo = {
    myName: "Sukhman",
    age: 25,
    profession: "Software Developer"
}

let myNewInfo = myInfo;
console.log(myInfo);
console.log(myNewInfo);

myNewInfo.age = 26;
myNewInfo.profession = "Project Manager"

console.log(myInfo);
console.log(myNewInfo);