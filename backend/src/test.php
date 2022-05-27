<?php

require_once 'mysqlConnect.php';

$query = "SELECT * FROM $users";

// On simule qu'on a reçu ça du front-end.
// C'est comme si dans un champ (d'un formulaire par exemple) nomé login 
// On avait tapé 1234 puis envoyé le formulaire.
// $_POST est un tableau, on peut envoyer plusieurs champs. Une ligne par champ.
$_POST['login'] = '1234';


$statement = $PDO->prepare( $query );
$exec = $statement->execute();

$resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );


print_r($resultats);
print_r($_POST)

?>