const name = {
    firstname: "Mitul",
    lastname: "Panchal"
}

const fullName = function(hometown, state) {
    console.log(this.firstname+ " " + this.lastname + " from " + hometown + ", " + state)
}
fullName.call(name, "Mumbai", "Maharashtra");
fullName.apply(name, ["Mumbai", "Maharashtra"]);
const printFullName2 = fullName.bind(name, "Mumbai", "Maharashtra");;
console.log(printFullName2);
printFullName2();

const name2 = {
    firstname: "Priyanka",
    lastname: "Mistry"
}

//function borrowing
fullName.call(name2, "Dehradun", "Uttrakhand"); // call
fullName.apply(name2, ["Dehradun", "Uttrakhand"]); //apply

//bind
const printFullName = fullName.bind(name2, "Dehradun", "Uttrakhand");
console.log(printFullName);
printFullName();
