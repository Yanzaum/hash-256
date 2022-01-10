<?php

    if (isset($_POST['hash']) && !empty($_FILES['documento']['tmp_name'])) {
        $hash_file = hash_file('sha256', $_FILES['documento']['tmp_name']);
        $hash = $_POST['hash'];
    
        echo strcasecmp($hash_file, $hash);
    } else {
        echo 'O arquivo não foi inserido ou o campo hash está vazio!';
    }

?>