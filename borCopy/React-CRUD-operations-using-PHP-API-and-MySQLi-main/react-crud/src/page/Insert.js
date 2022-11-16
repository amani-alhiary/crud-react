import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Insert = () => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    contract_name: '',
    total_cost: '',
    legal_office_name: '',
    employee_number: '',
    service_items: '',
    amount: '',
    company_id: '',
    warranty_start_date: '',
    warranty_end_date: '',
    signing_date: '',
    expiration_date: '',
   


  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 
  // Inserting a new user into the Database.
  const submitUser = async(event) => {
    try {
      event.preventDefault();
      event.persist();
     
      axios.post(`http://localhost/borCopy/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/addusers.php`, { 
        contract_name: userInfo.contract_name,
        total_cost: userInfo.total_cost,
        legal_office_name: userInfo.legal_office_name,
        employee_number: userInfo.employee_number,
        service_items: userInfo.service_items,
        amount: userInfo.amount,
        company_id: userInfo.company_id,
        warranty_start_date: userInfo.warranty_start_date,
        warranty_end_date: userInfo.warranty_end_date,
        signing_date: userInfo.signing_date,
        expiration_date: userInfo.expiration_date,




      })
      .then(res => {
        console.log(res.data);
        navigate(`/`);
        return;
       })
    } catch (error) { throw error;}    
  };

return (
  <form className="insertForm" onSubmit={submitUser}>
    <h2> Add Form </h2>
    <label htmlFor="_contract_name">Contract Name</label>
    <input
      type="text"
      id="_contract_name"
      name="contract_name"
      onChange={onChangeValue}
      placeholder="Enter contract name"
      autoComplete="off"
      required
    />

    <br /> <br />
    <label htmlFor="_total_cost">total cost</label>
    <input
      type="text"
      id="_total_cost"
      name="total_cost"
      onChange={onChangeValue}
      placeholder="Enter the total cost"
      autoComplete="off"
      required
    />
    <br /> <br />


    <label htmlFor="_legal_office_name">legal office name</label>
    <input
      type="text"
      id="_legal_office_name"
      name="legal_office_name"
      onChange={onChangeValue}
      placeholder="Enter office name"
      autoComplete="off"
      required
    />
    <br /> <br />


    <label htmlFor="_employee_number">employee number</label>
    <input
      type="text"
      id="_employee_number"
      name="employee_number"
      onChange={onChangeValue}
      placeholder="Enter office name"
      autoComplete="off"
      required
    />
    <br /> <br />


    
    <label htmlFor="_service_items">service items</label>
    <textarea
      type="text"
      id="_service_items"
      name="service_items"
      onChange={onChangeValue}
      placeholder="Enter service items"
      autoComplete="off"
      required
    />
    <br /> <br />


    <label htmlFor="_company_id">company_id</label>
    <input
      type="text"
      id="_company_id"
      name="company_id"
      onChange={onChangeValue}
      placeholder="Enter company id"
      autoComplete="off"
      required
    />
    <br /> <br />


    <label htmlFor="_amount">amount</label>
    <input
      type="text"
      id="_amount"
      name="amount"
      onChange={onChangeValue}
      placeholder="Enter amount"
      autoComplete="off"
      required
    />
    <br /> <br />



    <label htmlFor="_signing_date">signing date</label>
    <input
      type="date"
      id="_signing_date"
      name="signing_date"
      onChange={onChangeValue}
      placeholder="Enter signing date"
      autoComplete="off"
      required
    />
    <br /> <br />



    <label htmlFor="_expiration_date">expiration date</label>
    <input
      type="date"
      id="_expiration_date"
      name="expiration_date"
      onChange={onChangeValue}
      placeholder="Enter expiration date"
      autoComplete="off"
      required
    />
    <br /> <br />


    <label htmlFor="_warranty_start_date">warranty start date</label>
    <input
      type="date"
      id="_warranty_start_date"
      name="warranty_start_date"
      onChange={onChangeValue}
      placeholder="Enter warranty start date"
      autoComplete="off"
      required
    />
    <br /> <br />



    <label htmlFor="_warranty_end_date">warranty end date</label>
    <input
      type="date"
      id="_warranty_end_date"
      name="warranty_end_date"
      onChange={onChangeValue}
      placeholder="Enter warranty end date"
      autoComplete="off"
      required
    />
    <br /> <br />
    <input type="submit" value="Insert" />
  </form>
);
};

export default Insert;