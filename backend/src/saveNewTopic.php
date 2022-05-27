<?php
/*
require_once 'auth.php';
$_SESSION['user_id'] = '1';
$_SESSION['cours_id'] = [1,2];
$_POST['id_cours'] = '1';
$_POST['nom'] = 'test back end 58';*/

require_once 'helper.php';
require_once 'topics.php';
$resultat = create_new_topic($_POST['nom'],$_POST['id_cours']);
if($resultat == false) sendError("error, name of topic already exist for this course or name empty");
else sendMessage($resultat);
