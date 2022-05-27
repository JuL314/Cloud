<?php

require_once 'mysqlConnect.php';

function sql_get_id_cours_map($elt){
    return $elt['course'];
}

function sql_get_id_cours(){
    global $link, $PDO;

    $query = "SELECT course FROM $link ".
                "WHERE user=?";
    $data = array($_SESSION['user_id']);
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchAll (PDO::FETCH_ASSOC);
    $resultats = array_map('sql_get_id_cours_map',$resultats);
    
    $_SESSION['cours_id'] = $resultats;
    return $resultats;
}

?>