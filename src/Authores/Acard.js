import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import'./Acard.css'

export function Acard({ users }) {

  console.log(users)



  const { _id, username,name,email, Gender,Birthday } = users;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/auth/${_id}`)
      .then(res => res.data)
      .then(() => history('/'))
      .then(() => history('/auth'));

  }

  return (

    <>
    <div className='app-container'>
<table>

  <tbody>
   <tr>
     <td>{users.name}</td>
     <td>{users.email}</td>
     <td>{users.username} </td>
     {/* <td>{users.password}</td> */}
     <td>{users.Birthday}</td>
     <td>{users.Gender}</td>
     <td>{users.role}</td>
     </tr> 
  </tbody>
</table>
</div>

    
{/*   

              <div className="card-body">
               <strong><h5 className="card-title">{users}</h5>  </strong> 
       
                  <Link onClick={"UpdateUser"} to={`/UpdateUser/${users._id}`} class="btn  m-2 mb-2 btnn" type="button">Update</Link>
                  <Link onClick={deleteHandler} sx={{ mt: 'auto' }} to="#" class="btn  m-2 mb-2 btnn" type="button">Deletee</Link>
              
              </div>
        */}

    </>
  )
}


export default Acard