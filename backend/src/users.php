<?php

require_once 'mysqlConnect.php';

function does_bdd_contains(){
    global $users, $PDO;

    $query = "SELECT * FROM $users ".
                "WHERE login=? AND password=?";
    $data = array($_POST['login'],$_POST['password']);
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );

    if(!empty($resultats)) return true;
    else return false;
}

function id_user(){
    global $users, $PDO;

    $query = "SELECT user_id FROM $users ".
                "WHERE login=? AND password=?";
    $data = array($_POST['login'],$_POST['password']);
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchColumn();

    return $resultats;
}

?>