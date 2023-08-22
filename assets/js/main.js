/*
  Password generator
  - Ask user's name
  - Ask user's surname
  - Ask user's favourite colour
  - Add string number 23
  - Write in console the answer
  - Write result on page
*/

//Chiedo nome dell'user
let userName = prompt ('Insert your name');
console.log(userName);

//Chiedo cognome dell'user
let userSurname = prompt ('Insert your surname');
console.log(userSurname);

//Chiedo il colore preferito dell'user
let userFavColour = prompt ('Insert your favourite colour');
console.log(userFavColour);

//Aggiungo numero 23
const currentYearAbvr = Number(23);

//Risultato
console.log(userName + userSurname + userFavColour + currentYearAbvr);
document.writeln(userName + userSurname + userFavColour + currentYearAbvr)
