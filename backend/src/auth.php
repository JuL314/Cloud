<?php

require_once 'config.php';
require_once 'users.php';

session_start(['cookie_samesite'=>'Lax']);

function authenticate(){
    if(array_key_exists('login',$_POST) && array_key_exists('password',$_POST)){

        // Vérifier bdd contient couple
        if(does_bdd_contains()){
            $_SESSION['user_id'] = id_user();
            return true;
        }
    }
    return false;
}

function isAuthenticated(){
    //return array_key_exists('user_id',$_SESSION);
    return TRUE;
}

?>