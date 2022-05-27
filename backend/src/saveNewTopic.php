<?php
error_reporting(E_ERROR | E_PARSE);

require_once 'helper.php';
require_once 'topics.php';
$resultat = create_new_topic($_POST['nom'],$_POST['id_cours']);
if($resultat == false) sendError("error, name of topic already exist for this course or name empty");
else sendMessage($resultat);
