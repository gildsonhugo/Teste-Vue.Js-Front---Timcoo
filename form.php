<?php

    $feelValue = $_POST['feel'] ?? '';

    $content = file_get_contents('submissions.txt');

    $data = json_decode($content);

    $obj = [
        'timestamp' => time(),
        'feel' => $feelValue
    ];

    $data[] = $obj;

    $file = fopen('submissions.txt', 'w+');
    fwrite($file, json_encode($data));
    fclose($file);

    echo 'Success';
