import React from 'react'
import {useEffect,useState} from 'react'
import { Modal,show,Button} from 'react-bootstrap';
import './Card.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const View =({contract_name, service_items, total_cost, amount, legal_office_name, employee_number, signing_date, expiration_date, warranty_start_date, warranty_end_date})=>{
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
  


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
       <div class="feature feature-one">
        <h2 class="feature__title">{contract_name}</h2>
        <p class="feature__desc">{service_items}</p>
        <h4>{total_cost} JOD</h4>
        {/* <img class="feature__img" src="https://kellychi22.github.io/frontend-mentor-solutions/10-four-card-feature-section/images/icon-supervisor.svg" alt=""/> */}
        <button className='button-43' onClick={handleShow}>View Details</button>


        <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>{contract_name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                    <h3>Details: {service_items}</h3>
                    <h3>amounr: {amount}</h3>
                    <h3>Details: {service_items}</h3>
                    <h3>legal office name: {legal_office_name}</h3>
                    <h3>employee number: {employee_number}</h3>
                    <h3>Cost: {total_cost} JOD</h3>
                    <h3>signing date: {signing_date}</h3>
                    <h3>expiration date: {expiration_date}</h3>
                    <h3>warranty start date: {warranty_start_date}</h3>
                    <h3>warranty end date: {warranty_end_date}</h3>


                      {/* <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} />
                      <h3>{original_title}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <h5>Original language: {original_language}</h5>

                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p> */}
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
       
      </div>
      </div>

  )
}

export default View