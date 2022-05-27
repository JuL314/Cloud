<?php
header('Content-Type: application/json; charset=utf-8');
error_reporting(E_ERROR | E_PARSE);

require_once 'users.php';
require_once 'helper.php';

if(authenticate()) sendMessage($_SESSION['user_id']);
else sendError("login or passwordD not valid");
