<?php
header('Content-Type: application/json; charset=utf-8');
error_reporting(E_ERROR | E_PARSE);

require_once 'users.php';
require_once 'helper.php';

//$_POST['login'] = 'Hugo';
//$_POST['password'] = '1234';

if(authenticate()) sendMessage("");
else sendError("login or passwordD not valid");
