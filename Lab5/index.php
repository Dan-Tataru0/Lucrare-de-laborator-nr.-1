<?php 
    require '../mysql_connect.php';
    global $mysqli;
    
    $result = $mysqli->query('SELECT * from main.employment_surveys where 1;');
    $employes = $result->fetch_all(MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>    
    <script src="https://kit.fontawesome.com/438edcb8d0.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="employes.css">
    <title>Tabelul de angajati</title>
</head>
<body>
        <a href="employe_form.php"><button type="button" id="back_button" class="btn btn-dark">Insert data</button></a>
    <br>
    <div class="container">
    <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nume</th>
            <th scope="col">Prenume</th>
            <th scope="col">Email</th>
            <th scope="col">Telefon</th>
            <th scope="col">Adresa</th>
            <th scope="col">Profesia</th>
            <th scope="col">Link</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            <?php

            foreach ($employes as $employe) {
                echo "
        <tr>
            <th scope=\"row\">${employe['id']}</th>
            <td>${employe['name']}</td>
            <td>${employe['surname']}</td>
            <td>${employe['email']}</td>
            <td>${employe['phone']}</td>
            <td>${employe['address']}</td>
            <td>${employe['profession']}</td>
            <td>${employe['link']}</td>
            <td>
            <a href=\"view_employe.php?id=${employe['id']}\" target=\"_self\"><i class=\"fa-solid fa-eye fa-2x link-dark cursor-pointer mn\"></i></a>
        </td>
        </tr>
            ";
            }
            ?>
        </tbody>
      </table>
    </div>    
    
    <br>
    <br>
    <br>
    <div id="search">
    <p>Cauta dupa ID : </p>
            <form action="" method="POST">
                <input type="text" name="get_id" placeholde="get ID" required autocomplete="off">
                <button type="submit"  class="btn btn-dark" name="search">Search</button>
            </form>
    </div>

    <?php
    $connection = mysqli_connect("localhost","root","","main");
        if(isset($_POST['search'])) {
            $id = $_POST['get_id'];

            $query = "SELECT * from employment_surveys where id='$id'";
            $query_run = mysqli_query($connection,$query);

            if(mysqli_num_rows($query_run) > 0) {
                while($row = mysqli_fetch_array($query_run)){
                    echo $row['name'];
                    header ("Location: view_employe.php?id=".urlencode($row['id']));
            ?>
            <?php
                }
            }
            else {
                echo "<p id=\"show_error\">Nu se poate de accesat id-ul indicat</p>";
            }
        }
       

    ?>



    <script src="jquery-3.6.0.min.js"></script>
    <script src="check_script.js"></script>
</body>
</html>
