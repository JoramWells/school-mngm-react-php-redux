
<?php
// ini_set('memory_limit', '1000M');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: programid, other-allowed-headers');


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
    $role = $_POST['role'];

    $programid =$_GET['id'];

    
            // Otherwise register user
            // $sql = "INSERT INTO programs (courseName, description) VALUES ('$courseName','$description')";
            $sql = "UPDATE users SET userName = '$userName', email = '$email', role='$role' WHERE id='$programid'";
            $res = mysqli_query($conn, $sql);

        
            if($res){
                $row = mysqli_fetch_assoc($res);
   
                echo json_encode($row);
                unset($row);

                
            }else{
                echo mysqli_error($conn);
            }



    mysqli_close($conn);

}



?>