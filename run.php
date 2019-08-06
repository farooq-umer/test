<?php
require 'config.php';

use GuzzleHttp\Client;

$client = new Client();
$response = $client->get('http://localhost:12345/', [
    'auth' => [
        'videoelephant',
        '12345'
    ]
]);

print_r($response);

echo "<br><br>=========================<br><br>";
// Get all of the response headers.
foreach ($response->getHeaders() as $name => $values) {
    echo $name . ': ' . implode(', ', $values) . "\r\n";
}

echo "<br><br>=========================<br><br>";
$body = $response->getBody();
echo $body;
