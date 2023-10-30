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
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $userPassword = $_POST['userPassword'];
    $role = $_POST['role'];

    
    
    // check userExists
    $sql1 = "SELECT email FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $sql1);
    if($result){
        $row = mysqli_fetch_assoc(($result));
        if($row){
            echo 'User Exists';

        }else{


            // Otherwise register user
            $sql = "INSERT INTO users (userName, email, role, password) VALUES ('$userName','$email','$role','$userPassword')";
            $res = mysqli_query($conn, $sql);

        
            if($res){
                $row = mysqli_fetch_assoc($res);
                if($row){
                    echo json_encode($row);     
                }
                
            }else{
                echo mysqli_error($conn);
            }
        }
    }



    $conn->close();

}



?>