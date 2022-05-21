<?php
$servername = "localhost";
$username = 'root';
$password = '';
$dbname = "main";


$mysqli = mysqli_connect("localhost", "root", "", "main");

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$profession = $_POST['profession'];
$link = $_POST['link'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO main.employment_surveys (name,surname,email,phone,address,profession,link) VALUES 
 ('$name', '$surname', '$email','$phone','$address','$profession','$link')";
 

if ($conn->query($sql) === TRUE) {
  header ("Location: index.php");
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 