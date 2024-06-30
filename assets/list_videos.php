<?php
header('Content-Type: application/json');

$dir = isset($_GET['dir']) ? $_GET['dir'] : '';
$videos = array();

if ($dir) {
    $files = array_diff(scandir($dir), array('.', '..'));
    foreach ($files as $file) {
        if (is_file("$dir/$file") && preg_match('/\.(mp4|webm|ogg)$/i', $file)) {
            $videos[] = "$dir/$file";
        }
    }
}

echo json_encode($videos);
?>
