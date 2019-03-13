<?php
$apiKey = 'AIzaSyCIE-MGpouMMakc8Hibva_i0Pvh9kZG7ig';
$oobCode = $_GET['oobCode'];
$mode = $_GET['mode'];

$url = 'https://blue-bolt-cloud.firebaseapp.com/__/auth/action?mode='.$mode.'&oobCode='.$oobCode.'&apiKey='.$apiKey;

header('Location: '.$url);

?>