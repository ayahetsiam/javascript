// les variables en javascript
let myName = "Etsiam";
console.log("Nom", myName);

/* Avec le mot clé 'var' il est possible de declarer deux variables de même nom
 ce qui n'est pas possible avec 'let' 
 et d'ailleur 'var' est déconseiller */

myName = "Pascal";
console.log("Nom", myName);
// les constantes

const origine = "Togo";

console.log("Origin", origine);

// les types de donnée
/*
    Number
    BigInt
    String
    Symbol
    null
    boolean
    undefinded
*/

// la concatenation

console.log("NomOrgin", myName + origine);

const sentence = `Mon nom est ${myName} et je viens du ${origine}`;

// Un string est un tableau
const firstword = sentence[0];

console.log(firstword);

/*
    la classe string a pas mal  de methode comme :
    toUpperCase
    chatAt
    includes
*/

console.log(sentence.charAt(2));
console.log(sentence.toUpperCase());

//Undefined Vs null

let nom;
let prenom = null;

console.log(nom);
console.log(prenom);

let age = 12;

console.log(String(age));

console.log(Number(age));

let classe = "lpro";
console.log(Number(classe)); // Not a Number

// javascript concatène un string avec un Number
console.log(classe + age);

console.log(isNaN(classe));

age--; //decrementation

age++; //incrementation
