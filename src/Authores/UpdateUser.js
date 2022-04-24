import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState(false);
    const id = useParams().id;
    const history = useNavigate();
console.log(id+"llalkaaaaaaa")
console.log(inputs)
// const params= useParams();
// console.log(params.id);

    useEffect(() => {

        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/auth/${id}`,{ 'headers': { 'authorization': localStorage.getItem("token") }})
                .then(res => res.data)
                .then(data => setInputs(data.auth))
        }

        fetchHandler();

    }, [id])

    const sendReqest = async () => {
        axios.put(`http://localhost:5000/auth/${id}`, {
            name: String(inputs.name),
            // username: String(inputs.username),
            email: String(inputs.email),
            // passwored: Number(inputs.passwored),
            role: String(inputs.role),
            Birthday: String(inputs.Birthday),
        }).then(res => res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendReqest().then(() => history('/auth/update'));

    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
  return (
    <div>
         <div>
            {inputs && (
            <form className="container mt-3 " onSubmit={handleSubmit}>
  {/* <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Name</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp" value={inputs.name} name="name" onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div> */}
  {/* <div class="mb-3">
    <label for="exampleInputtext" class="form-label"><strong>username</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" name="username" value={inputs.username} onChange={handleChange}/>
  </div>  */}
  {/* <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">email</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" name="email" aria-describedby="textHelp" value={inputs.email} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div>  */}
  {/* <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">passwored</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" name="passwored" aria-describedby="textHelp" value={inputs.passwored} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div> */}
   <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">role</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" name="role" aria-describedby="textHelp" value={inputs.role} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div> 
  {/* <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Birthday</strong></label>
    <input type="date" class="form-control" id="exampleInputtext" name="Birthday" aria-describedby="textHelp" value={inputs.Birthday} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div>  */}

  <Link onClick={"User"} to={"/User"}><button type="submit" class="btn btn-primary mb-2">Update</button>
 </Link>
</form>              
  )}
        </div>
    </div>
  )
}

export default UpdateUser