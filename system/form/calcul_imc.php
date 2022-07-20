<?php

if(is_numeric($_POST['taille']) && is_numeric($_POST['poids'])) {
    $taille =  $_POST['taille'] / 100;
    $reponse = $_POST['poids'] / ($taille * $taille);
    $reponse = round($reponse, 1);
}


echo json_encode($reponse, JSON_UNESCAPED_UNICODE);
exit;