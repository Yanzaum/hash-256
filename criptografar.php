<?php

	if (!empty($file = $_FILES['documento']['tmp_name'])) {
		echo hash_file('sha256', $file);
	} else {
		echo 0;
	}
		
?>