var elements = ["Gliemežvāks!", "oho..Rūķis!", "Sienāzis ^^", "Veiksmīgs..! Pūķis!", "Raar! Tīģeris!"];

function getRandomElement() {
  var randomIndex = Math.floor(Math.random() * elements.length);
  document.getElementById("outtext").textContent = elements[randomIndex];
}