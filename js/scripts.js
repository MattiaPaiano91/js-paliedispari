// consegna

// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function parolaPalindroma(controllo1, controllo2){
if (controllo1 == controllo2) {
    
  return (risultatoControllo.innerHTML =
    "La parola che hai inserito è: '" + controllo1 + "' ed è palindroma!");
} else {
  return (risultatoControllo.innerHTML =
    "La parola che hai inserito è: '" + controllo1 + "' e non è palindroma!");
}
}
    
let risultatoControllo = document.getElementById('input-utente');





let inputUtente = prompt('Inserisci una parola');

let splitedWord = inputUtente.split("");

let reverseSplitedWord =  splitedWord.reverse();

let reverseWord = reverseSplitedWord.join('');

parolaPalindroma(inputUtente, reverseWord);
 
 

 


