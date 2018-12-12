<?php

   include("config.php");

$link = $db;
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());

}
$name=$_post['name'];
$cn=$_post['collegename'];
$deg=$_post['degree'];
$regno=$_post['registernumber'];
$eml=$_post['email'];
$pwd=$_post['password'];

// Attempt insert query execution
$sql = "INSERT INTO register ('name','college_name','degree','register_number','email','password') VALUES
      values($name,$cn,$deg,$regno,$eml,$pwd);      
if(mysqli_query($db, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>
