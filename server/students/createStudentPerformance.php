<?php
header('Access-Control-Allow-Origin: *');

$server = 'localhost';
$user = 'root';
$password = 'root';
$DB = 'reportcard';

$conn = new mysqli($server, $user, $password, $DB);

$targetDir = "uploads/";

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}else{
    $studentID = $_POST['studentID'];
    $courseName = $_POST['courseName'];
    $description = $_POST['description'];
    $studentName = $_POST['studentName'];
    $file = $_POST['file'];
    $createdAt = $_POST['createdAt'];

    $targetFile = $targetDir.basename($_FILES['file']['name']);

    if(move_uploaded_file($_FILES['files']['tmp_name'], $targetFile)){
        echo 'File Uploaded successfully';
    }else{
        echo "Error uploading the file";
    }

    // Otherwise register user
    $sql = "INSERT INTO studentperformance 
                        (courseName, marks, studentID, studentName, createdAt) VALUES 
                        ('$courseName','$description', '$studentID', '$studentName', '$createdAt')";
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
