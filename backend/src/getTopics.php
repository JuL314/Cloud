<?php
error_reporting(E_ERROR | E_PARSE);
/* pour tester
require_once 'auth.php';

$_SESSION['user_id'] = '1';
$_SESSION['cours_id'] = [1,2];
$_POST['id_cours'] = '1';*/


require_once 'helper.php';
require_once 'topics.php';

sendMessage(topics_from_id($_POST['id_cours']));
