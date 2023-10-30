<?php
header('Access-Control-Allow-Origin: *');

$server = 'localhost';
$user = 'root';
$password = 'root';
$DB = 'reportcard';

$conn = new mysqli($server, $user, $password, $DB);

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}else{
    // $userName = $_POST['userName'];
    $email = $_POST['email'];
    $userPassword = $_POST['password'];

    // select user where username
    $sql1 = "SELECT *  FROM users WHERE email='$email'";

    // $sql = "INSERT INTO users (userName, email, password) VALUES ('$userName','$email','$userPassword')";
    $res = mysqli_query($conn, $sql1);

    if($res){
        $row = mysqli_fetch_assoc($res);
        if($row){

            // convert to json
            $jsonData = json_encode($row);

            if($jsonData === false){
                echo "Error encoding to JSON: " . json_last_error_msg();
            }else{
                echo $jsonData;
            }

            // echo $row['email'];

        }
    }

    // while($rowitem = mysqli_fetch_array($res)){
    //     echo $rowitem;
    // }

    // if($res){
    //     while($rowitem = mysqli_fetch_array($res)){
    //         echo $rowitem;
    //     }
    // }else{
    //     echo mysqli_error($conn);
    // }

    $conn->close();

}



?>