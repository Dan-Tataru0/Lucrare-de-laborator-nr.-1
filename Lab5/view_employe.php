<?php

$mysqli = mysqli_connect("localhost", "root", "", "main");

$id = null;
$name = '';
$surname = '';
$email = '';
$phone = '';
$address = '';
$profession = '';
$link = '';



if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $result = $mysqli->query("SELECT * from employment_surveys where id = $id");
    if ($result) {
        $object = $result->fetch_assoc();
        $name = $object['name'];
        $surname = $object['surname'];
        $email = $object['email'];
        $phone = $object['phone'];
        $address = $object['address'];
        $profession = $object['profession'];
        $link = $object['link'];

    } else {
     $id = null;
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Informatie angajat</title>
    <link rel="stylesheet" href="show_employe.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>    
    
</head>
<body>

<div id="main">
    <p id="gen_info">DATELE DESPRE ANGAJATUL NR <?php echo"$id"?></p>
<div class="container">
    <div class="row">
    <div class="col-3 ">Name</div>
    <div class="col-4"><?php echo $name ?></strong>
</div>
</div>
<div class="row">
    <div class="col-3">Surname</div>
    <div class="col-4"><?php echo $surname ?></div>
</div>
<div class="row">
    <div class="col-3">Email</div>
    <div class="col-4"><?php echo $email ?></div>
</div>
<div class="row">
    <div class="col-3">Phone</div>
    <div class="col-4"><?php echo $phone ?></div>
</div>
<div class="row">
    <div class="col-3">Address</div>
    <div class="col-4"><?php echo $address ?></div>
</div>
<div class="row">
    <div class="col-3">Profession</div>
    <div class="col-4"><?php echo $profession ?></div>
</div>
<div class="row">
    <div class="col-3">Link</div>
    <div class="col-4"><a href="<?php echo $link ?>" id="rec"><?php echo $link ?></a></div>
</div>
</div>
<div id="redir"><a href="index.php" id="link"><button type="button" class="btn btn-dark">Back</button></div></a>
</div>


</body>
</html>