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
$ed_title = $_POST['Education_Title'];
$graduation_date = $_POST['graduation_date'];
$ed_type = $_POST['Selected_Education'];
$job_name = $_POST['Selected_Job'];
$job_start_date = $_POST['job_start_date'];
$job_end_date = $_POST['job_end_date'];
$city = $_POST['Selected_City'];
$company = $_POST['Selected_Company'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO main.employment_surveys (name,surname,email,phone,address,profession,link,ed_title,graduation_date,ed_type,job_name,job_start_date,job_end_date,city_name,company_name) VALUES 
 ('$name', '$surname', '$email','$phone','$address','$profession','$link','$ed_title','$graduation_date','$ed_type','$job_name','$job_start_date','$job_end_date','$city','$company')";
 

if ($conn->query($sql) === TRUE) {
  header ("Location: index.php");
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 