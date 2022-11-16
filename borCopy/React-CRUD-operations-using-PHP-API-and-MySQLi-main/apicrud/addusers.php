<?php 
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->contract_name)
	&& isset($data->signing_date) 
	&& isset($data->expiration_date)
	&& isset($data->total_cost)
	&& isset($data->legal_office_name)
	&& isset($data->employee_number)
	&& isset($data->service_items)
	&& isset($data->amount)
	&& isset($data->warranty_start_date)
	&& isset($data->warranty_end_date)
	&& isset($data->company_id)
	&& !empty(trim($data->contract_name))
	&& !empty(trim($data->signing_date))
	&& !empty(trim($data->expiration_date))
	&& !empty(trim($data->total_cost))
	&& !empty(trim($data->legal_office_name))
	&& !empty(trim($data->employee_number))
	&& !empty(trim($data->service_items))
	&& !empty(trim($data->amount))
	&& !empty(trim($data->warranty_start_date))
	&& !empty(trim($data->warranty_end_date))
	&& !empty(trim($data->company_id))



	){
		
	$contract_name = mysqli_real_escape_string($db_conn, trim($data->contract_name));
	$signing_date = mysqli_real_escape_string($db_conn, trim($data->signing_date));
	$expiration_date = mysqli_real_escape_string($db_conn, trim($data->expiration_date));
	$total_cost = mysqli_real_escape_string($db_conn, trim($data->total_cost));
	$legal_office_name = mysqli_real_escape_string($db_conn, trim($data->legal_office_name));
	$employee_number = mysqli_real_escape_string($db_conn, trim($data->employee_number));
	$service_items = mysqli_real_escape_string($db_conn, trim($data->service_items));
	$amount = mysqli_real_escape_string($db_conn, trim($data->amount));
	$warranty_start_date = mysqli_real_escape_string($db_conn, trim($data->warranty_start_date));
	$warranty_end_date = mysqli_real_escape_string($db_conn, trim($data->warranty_end_date));
	$company_id = mysqli_real_escape_string($db_conn, trim($data->company_id));


	$date = date('Y-m-d');

	$add = mysqli_query($db_conn,"insert into contracts (contract_name,signing_date,expiration_date,total_cost,legal_office_name,employee_number,service_items,amount,warranty_start_date,warranty_end_date,company_id) values('$contract_name','$signing_date','$expiration_date','$total_cost','$legal_office_name','$employee_number','$service_items','$amount','$warranty_start_date','$warranty_end_date','$company_id')");
	if($add){
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success"=>true,"insertid"=>$last_id]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?>