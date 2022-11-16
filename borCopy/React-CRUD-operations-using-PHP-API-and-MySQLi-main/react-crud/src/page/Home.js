import React, {useEffect,useState} from 'react'
import axios from 'axios';
import {Link } from "react-router-dom";
import { Modal,show,Button} from 'react-bootstrap';
import View from './View';
import './Card.css'

const Home = () => {

  useEffect( () => {
    window.scrollTo(0, 0);
    alluser();
  }, []); 
  // http://localhost/bor/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/apicrud/users.php
  const [isuser, setuser] = useState([]);
  const alluser = async (ids) => {
    try {
      axios.get(`http://localhost/borCopy/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/users.php`)
      .then(res => {
        // console.log(res.data.userlist.userdata)
        setuser(res.data.userlist.userdata);
      })
    } catch (error) { throw error;}    
  }

 

  return (
    <div>
    <Link to="/insert" className='btn'> Create User </Link>
   
 
  <div class="features">
  {isuser.map((item)=>
          <View key={item.id} {...item}/>)}
    
  
    </div>


    </div>
  )
}

export default Home