import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link ,useNavigate} from "react-router-dom";
import {Acard} from './Acard'
export function User() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:5000/auth',{ 'headers': { 'authorization': localStorage.getItem("token") }})
      .then((res) =>  setUser(res.data.users))
      // console.log(res.data.users))
      .catch((err) => console.log(err));
    // return() =>{
    //   console.log("DESTROYED");
    // };
  }, []);
  console.log(User)
  const { _id, name, author, description, price, image } = User;
  const history = useNavigate();
  const deleteHandler = async (id) => {
    await axios
      .delete(`http://localhost:5000/auth/deleteUser/${id}`)
      .then(res => res.data)
      .then(() => history('/'))
      .then(() => history('/auth'));

  }
  return (
    <div className='container '>
 {/* <Link onClick={"AddUser"} to={"/AddUser"} class="btn btnn mt-3 mb-5 my-2 w-22" style={{float:"right"}} type="button">
     <i class="fa-solid fa-plus"></i>
       AddUser</Link> */}
       <br/>
       <br/>
       <br/>
    <div className='row'>
      <table>
    <thead>
    <tr>
    <th> Name </th>  
    <th>Email</th>
    <th>UserName</th>
    {/* <th>Password</th> */}
    <th>Birthday</th>
    <th>Gender</th>
    <th>role</th>
    <th>Update</th>
    <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   
{User?.map((users) => (

   <tr>
     <td>{users.name}</td>
     <td>{users.email}</td>
     <td>{users.username} </td>
     {/* <td>{users.password}</td> */}
     <td>{users.Birthday}</td>
     <td>{users.Gender}</td>
     <td>{users.role}</td>
     <td>  <Link onClick={"UpdateUser"} to={`/UpdateUser/${users._id}`} class="btn btnn  mb-2 my-2 " style={{float:"right"}} type="button">
     <i class="fa-solid fa-pen-to-square"></i></Link></td>
       <td><Link onClick={()=>deleteHandler(users._id)} sx={{ mt: 'auto' }} to="#" class="btn  m-2 mb-2 btnn" type="button"><i class="fa-solid fa-trash"></i></Link>
</td>
     </tr> 
             ))}
  </tbody>
  </table>
        {/* //  {User?.map((users) => ( */}
           <>
           
       {/* <tr>
           {/* <div className='col-9'> */}
           {/* <Acard users = {users}></Acard> */}
         
       
           {/* </div> */}
           {/* <table> */}

  {/* <tbody> */}
    {/* <tr>
      <td>name</td>
      <td>Email</td>
      <td>UserName</td>
      <td>Birthday</td>
    </tr> */}
   {/* <tr>
     <td>{users.name}</td>
     <td>{users.email}</td>
     <td>{users.username} </td>
     {/* <td>{users.password}</td> */}
     {/* <td>{users.Birthday}</td>
     <td>{users.Gender}</td>
     <td>{users.role}</td>
     </tr> 
  </tbody>
</table> */}
           {/* </tr> */}
           </> 
          


    </div>
    </div>
  );
}
export default User

