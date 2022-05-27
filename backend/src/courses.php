<?php

require_once 'mysqlConnect.php';

function array2request($str,$elt){
    return $str.'?,';
}

function sql_get_cours(){
    global $courses, $PDO;

    $req = array_reduce($_SESSION['cours_id'],"array2request","(");
    $req[-1] = ')';

    $query = "SELECT * FROM $courses ".
                "WHERE course_id IN $req";
    $data = $_SESSION['cours_id'];
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );

    return $resultats;
}

function sql_get_name($id){
    global $courses, $PDO;

    $query = "SELECT * FROM $courses ".
                "WHERE course_id=?";
    $data = [$id];
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );

    return $resultats;
}

?>