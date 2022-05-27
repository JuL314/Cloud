<?php

require_once 'config.php';

putenv('TTRSS_SINGLE_USER_MODE=true');

// use PDO;

$dsn = "mysql:host=$mysqlHost;".
    "dbname=$mysqlDatabase;".
    "charset=$charset";

$opt =[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
PDO::ATTR_EMULATE_PREPARES =>false];

try{
$PDO = new PDO($dsn, $mysqlLogin, $mysqlPassword, $opt);
}catch (\PDOException $e) {
     throw new \PDOException($e->getMessage(), (int)$e->getCode());
}