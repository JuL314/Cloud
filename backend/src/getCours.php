<?php
error_reporting(E_ERROR | E_PARSE);

require_once 'helper.php';
require_once 'link.php';
require_once 'courses.php';

sql_get_id_cours();
sendMessage(sql_get_cours());

?>