import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

const AddUser = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    email: '',
    passwored: '',
    role: '',
    Birthday: ''
  });
  const [checked, setChecked] = useState(false)


  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(e.target.value)
    console.log(e.target.name)

  }

  const sendReqest = async () => {
    axios.post("http://localhost:5000/register", {
        name: String(inputs.name),
        username: String(inputs.username),
        email: String(inputs.email),
        passwored: Number(inputs.passwored),
        role: String(inputs.role),
        Birthday: String(inputs.Birthday),
    }).then(res => res.data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendReqest().then(() => history('/auth'));
  }

  return (
    <div>
        
            <form className="container mt-3 " onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Name</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp" value={inputs.name} name="name" onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputtext" class="form-label"><strong>username</strong></label>
    <input type="text" class="form-control" id="exampleInputusername" name="username" value={inputs.username} onChange={handleChange}/>
  </div> <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">email</strong></label>
    <input type="text" class="form-control" id="exampleInput" name="email" aria-describedby="textHelp" value={inputs.email} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div> <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">passwored</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" name="passwored" aria-describedby="textHelp" value={inputs.passwored} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div>
   <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">role</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" name="role" aria-describedby="textHelp" value={inputs.role} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div> 
  <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Birthday</strong></label>
    <input type="date" class="form-control" id="exampleInputtext" name="Birthday" aria-describedby="textHelp" value={inputs.Birthday} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div> 

  <Link onClick={"User"} to={"/User"}><button type="submit" class="btn btn-primary mb-2">AddUser</button>
 </Link>
</form>              
        </div>
  )
}


export default AddUser