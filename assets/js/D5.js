/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("***** ESERCIZIO 1 *****")

const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("***** ESERCIZIO 2 *****")

pets.sort();

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("***** ESERCIZIO 3 *****")

pets.reverse()

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("***** ESERCIZIO 4 *****")

function positionPet(stringa) {
  let firstWord = stringa[0];
  let cutString = stringa.slice(1);
  cutString.push(firstWord);
  console.log(cutString)
  for (let i = 0; i < cutString.length; i++){
    pets[i] = cutString[i]
  }
    
}

positionPet(pets)
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/


const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log("***** ESERCIZIO 5 *****")

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  car.licensePlate = "targa"

}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("***** ESERCIZIO 6 *****")

const car2 = {
  brand: 'volskwagen',
  model: 'golf',
  color: 'white',
  trims: ['GTI'],
}
cars.push(car2);

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

console.log("***** ESERCIZIO 7 *****")

for (let i = 0; i < cars.length; i++) {
  let trim = cars[i].trims[0]
  justTrims.push(trim)
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("***** ESERCIZIO 8 *****")

for (let i = 0; i < cars.length; i++) {

  let colore;
  if (cars[i].color.charAt(0) === "b") {
    colore = "Fizz"
  } else {
    colore = "Buzz"
  }
  console.log(colore)

}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log("***** ESERCIZIO 9 *****")
let i = 0
while (numericArray[i] !== 32) {
  console.log(numericArray[i])
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let newArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  let exitnumb = charactersArray[i]
  switch (exitnumb) {
    case "a":
      newArray.push(1)
      break;
    case "b":
      newArray.push(2)
      break;
    case 'c':
      newArray.push(3);
      break;
    case 'd':
      newArray.push(4);
      break;
    case 'e':
      newArray.push(5);
      break;
    case 'f':
      newArray.push(6);
      break;
    case 'g':
      newArray.push(7);
      break;
    case 'h':
      newArray.push(8);
      break;
    case 'i':
      newArray.push(9);
      break;
    case 'j':
      newArray.push(10);
      break;
    case 'k':
      newArray.push(11);
      break;
    case 'l':
      newArray.push(12);
      break;
    case 'm':
      newArray.push(13);
      break;
    case 'n':
      newArray.push(14);
      break;
    case 'o':
      newArray.push(15);
      break;
    case 'p':
      newArray.push(16);
      break;
    case 'q':
      newArray.push(17);
      break;
    case 'r':
      newArray.push(18);
      break;
    case 's':
      newArray.push(19);
      break;
    case 't':
      newArray.push(20);
      break;
    case 'u':
      newArray.push(21);
      break;
    case 'v':
      newArray.push(22);
      break;
    case 'w':
      newArray.push(23);
      break;
    case 'x':
      newArray.push(24);
      break;
    case 'y':
      newArray.push(25);
      break;
    case 'z':
      newArray.push(26);
      break;
  }
}
 console.log(newArray)
























//  ESERCIZIO 4
    // Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.


console.log("***** ESERCIZIO 20*****")


const pets2 = ['dog', 'cat', 'hamster', 'redfish'];

function moveFirstElementToLastPosition(){
  // 1 prendere prima parola
  let firstElement = pets2[0];
  let arrWithoutFirstElement = pets2.slice(1);
  arrWithoutFirstElement.push(firstElement);
  console.log(arrWithoutFirstElement.push(firstElement))
}

moveFirstElementToLastPosition()

function moveFirstElementToLastPosition2(arr){
  // 1 prendere prima parola
  let firstElement = arr[0];
  let arrWithoutFirstElement = arr.slice(1);
  return [...arrWithoutFirstElement,firstElement]
}
console.log("nuovo ris",moveFirstElementToLastPosition2(pets2))

function positionPet(stringa) {
  let firstWord = stringa[0];
  let cutString = stringa.slice(1);
  cutString.push(firstWord);
  console.log(cutString)
  for (let i = 0; i < cutString.length; i++){
    pets[i] = cutString[i]
  }
    
}