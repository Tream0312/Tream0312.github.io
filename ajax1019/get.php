<?php
	$username=$_GET["username"];
	$psw=$_GET["psw"];
	if($username=="admin" && $psw=="123"){
		echo "success";
	}
	else{
		echo "fail";
	}
?>