<?php
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if(isset($data->userids) 
	&& !empty(trim($data->userids))
	){
  $adduserid = mysqli_real_escape_string($db_conn, trim($data->userids));
	$allUsers = mysqli_query($db_conn,"SELECT * FROM contracts where id = '".$adduserid."'");
	if(mysqli_num_rows($allUsers) > 0){
		while($row = mysqli_fetch_array($allUsers)){
      $viewjson["id"] = $row['id'];
	  $viewjson["id"] = $row['id'];
	  $viewjson["contract_name"] = $row['contract_name'];
	  $viewjson["signing_date"] = $row['signing_date'];
	  $viewjson["expiration_date"] = $row['expiration_date'];
	  $viewjson["total_cost"] = $row['total_cost'];
	  $viewjson["legal_office_name"] = $row['legal_office_name'];
	  $viewjson["employee_number"] = $row['employee_number'];
	  $viewjson["service_items"] = $row['service_items'];
	  $viewjson["amount"] = $row['amount'];
	  $viewjson["warranty_start_date"] = $row['warranty_start_date'];
	  $viewjson["warranty_end_date"] = $row['warranty_end_date'];
	  $viewjson["company_id"] = $row['company_id'];

$json_array["userdata"][] = $viewjson;
		}
		echo json_encode(["success"=>true,"userlist"=>$json_array]);
		return;
			
	}
	else{
		echo json_encode(["success"=>false]);
		return;
	}
		
}
?>