<?php
// ini_set('memory_limit', '1000M');

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
    // $courseName = $_POST['courseName'];
    // $description = $_POST['description'];

    
            // Otherwise register user
            // $sql = "INSERT INTO programs (courseName, description) VALUES ('$courseName','$description')";
            $sql = "SELECT * FROM studentperformance";
            $res = mysqli_query($conn, $sql);

        
            if($res){
                $data = array();
                // $row = mysqli_fetch_assoc($res);
                while($row =mysqli_fetch_assoc($res)){
                    $data[] = $row;
                }
                echo json_encode($data);
                unset($data)     ;

                
            }else{
                echo mysqli_error($conn);
            }



    mysqli_close($conn);

}



?>