<?php

require_once 'mysqlConnect.php';

function topics_from_id($id){
    global $suject, $PDO;

    $query = "SELECT no_posts FROM $suject ".
                "WHERE course_id=?";
    $data = [$id];
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );
    
    $nom = sql_get_name_topic($id);

    return array($resultats,$nom);
}

function sql_get_name_topic($id){
    global $courses, $PDO;

    $query = "SELECT course_name FROM $courses ".
                "WHERE course_id=?";
    $data = [$id];
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );

    return $resultats;
}

function create_new_topic($nom,$id){
    if(empty($nom) OR does_name_exist($nom,$id)){
        return false;
    }
    else {
        add_topic($nom,$id);
        // il faut incrémenter le nb de topic du cours de l'id(du cours)
        return get_topic_id($nom);
    }
}

function get_topic_id($nom){
    global $suject, $PDO;

    $query = "SELECT suject_id FROM $suject ".
                "WHERE subject_name=?";
    $data = [$nom];
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );
    return $resultats;
}

function add_topic($nom,$id){
    global $suject, $PDO;

    $query = "INSERT INTO $suject (course_id,subject_name,no_posts,last_message) VALUES ".
                "(?,?,'0',NULL)";
    $data = [$id,$nom];
    
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    
}

function does_name_exist($nom,$id){
    global $suject, $PDO;

    $query = "SELECT * FROM $suject ".
                "WHERE subject_name=? AND course_id=?";
    $data = [$nom,$id];
    $statement = $PDO->prepare( $query );
    $exec = $statement->execute($data);
    $resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );

    if(!empty($resultats)) return true;
    else return false;
}

?>