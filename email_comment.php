<?php

    $to      = 'wrenj13@gmail.com';
    $subject = 'Message from ' . $_POST['name'] . ' @ ' . $_POST['email'] . ' from personal website';
    $message = $_POST['comment'] ;
    $headers = 'From: wrenj13@gmail.com' . "\r\n" .
        'Reply-To: wrenj13@gmail.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);


?>