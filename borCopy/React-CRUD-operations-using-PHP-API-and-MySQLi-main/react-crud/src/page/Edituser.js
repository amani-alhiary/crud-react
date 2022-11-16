import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Edituser = (props) => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    contract_name: props.list.contract_name,
    signing_date: props.list.signing_date,
    expiration_date: props.list.expiration_date,

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
      axios.post(`http://localhost/borCopy/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/users.php`, { 
        contract_name: userInfo.contract_name,
        signing_date: userInfo.signing_date,
        expiration_date: userInfo.expiration_date,
        userids: props.list.id,
      })
      .then(res => {
        console.log(res.data);
        navigate(`/`);
        return;
       })
    } catch (error) { throw error;}    
  };

return (
  <form className="editForm" onSubmit={submitUser}>
    <h2> Edit Form </h2>
    <label htmlFor="_name">Name</label>
    <input
      type="text"
      id="_name"
      name="name"
      value={userInfo.contract_name}
      onChange={onChangeValue}
      placeholder="Enter name"
      autoComplete="off"
      required
    />
    <br /> <br />
    <label htmlFor="_email">Email</label>
    <input
      type="email"
      id="_email"
      name="email"
      value={userInfo.signing_date}
      onChange={onChangeValue}
      placeholder="Enter email"
      autoComplete="off"
      required
    />
    <br /> <br />
    <label htmlFor="_mobile">mobile</label>
    <input
      type="text"
      id="_mobile"
      name="mobile"
      value={userInfo.expiration_date}
      onChange={onChangeValue}
      placeholder="Enter phone"
      autoComplete="off"
      required
    />
    <br /> <br />
    <input type="submit" value="update" />
  </form>
);
};

export default Edituser;