<?php
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Origin: http://localhost:8081");
error_reporting(E_ERROR | E_PARSE);

session_start(['cookie_samesite'=>'Lax']);
$_SESSION['user_id'] = $_POST['user'];