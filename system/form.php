<?php 

$chemin = RACINE_CHEMIN . "system/form/" . $_POST["file"] . ".php";

if(is_file($chemin)) {
    array_walk_recursive($_POST, function(&$v){
        $v = strip_tags(htmlspecialchars(trim($v)));
    });

    include $chemin;
}