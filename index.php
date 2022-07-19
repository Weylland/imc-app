<?php

session_start();

require "./config.php";

if(!empty($_POST)) {
    include "./system/form.php";
    if($_POST['ajax'] == 1) exit;
}

if(!empty($_GET['url'])) {
   $get = $_GET['url']; 
} else {
    $get = "accueil";
}

$chemin = RACINE_CHEMIN ."/page/" .  $get  . ".php";

if(is_file($chemin)) {

    include "./page/include/head.php";

    include $chemin;

    include "./page/include/footer.php";

}