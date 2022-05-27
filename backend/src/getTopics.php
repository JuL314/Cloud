<?php
error_reporting(E_ERROR | E_PARSE);

require_once 'helper.php';
require_once 'topics.php';

sendMessage(topics_from_id($_POST['id_cours']));
