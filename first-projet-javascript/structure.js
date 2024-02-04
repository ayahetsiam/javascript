
// Les structures(objet)
const user = {
    nom: "etsiam",
    age: 12
}

user.nom = "Clarisse";

console.log(user);

console.log(`${Object.keys(user)} => ${Object.values(user)}`)

keyValue(user);

// tableau: notion de référence

let noms = ["clarisse", "rosine", "charlotte"];
let noms2 = noms;

noms2[1] = "js"
noms.push("ama");
noms.unshift("avayi");

noms2.splice(1, 3);

console.log(noms)
console.log(noms2);

const namesLength = noms.map(nom => {
    return nom.length;
})

console.log(namesLength);
//ici avec const on peut changer de valeur mais on peut pas changer d'adresse ce qui est possible avec let