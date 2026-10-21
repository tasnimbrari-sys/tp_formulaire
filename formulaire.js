function verifier() {
  let nom = document.getElementById("p").value;
  let prenom = document.getElementById("n").value;
  let email = document.getElementById("a").value;
  let tel = document.getElementById("t").value;

  if (nom == "" || prenom == "" || email == "" || tel == "") {
    alert("Veuillez remplir tous les champs !");
    return false;
  }

  if (nom.length > 15) {
    alert("Le nom ne doit pas dépasser 15 caractères !");
    return false;
  }

  if (prenom.length > 15) {
    alert("Le prénom ne doit pas dépasser 15 caractères !");
    return false;
  }

  if (tel.length != 8 || tel[0] == "0") {
    alert(
      "Le téléphone doit contenir 8 chiffres et ne doit pas commencer par 0 !"
    );
    return false;
  }

  alert("Formulaire envoyé avec succès !");
  return true;
}
