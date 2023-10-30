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
    $courseName = $_POST['courseName'];
    $description = $_POST['description'];

    
            // Otherwise register user
            $sql = "INSERT INTO programs (courseName, description) VALUES ('$courseName','$description')";
            $res = mysqli_query($conn, $sql);

        
            if($res){
                $row = mysqli_fetch_array($res);
                if($row){
                    echo json_encode($row);     
                }
                
            }else{
                echo mysqli_error($conn);
            }



    $conn->close();

}



?>