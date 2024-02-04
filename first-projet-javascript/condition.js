//conditon

/*
    if (condition) {
    //execution
    } else {
    //code
    }
*/

let nom = "ffgfgfhgfhj";

if ((nom = "clarisse")) {
  console.log("mon nom est clarisse");
} else {
  console.log("je ne connais pas ton nom");
}

/*il y a trois types d'égalité
= l'affectation
== compare deux deux valeurs en faisant des conversion si possible
=== compare deux valeurs de mamière stricte
*/

let age = "12";

if (age === 12) {
  console.log("tu as vraiment 12 ans");
} else if (age == 12) {
  console.log("tu as presque 12 ans");
} else {
  console.log("Je ne connais pas ton age");
}

//condition ternaire

let names = "clarisse".length > 5 ? "vrai" : "faux";
console.log(names)
