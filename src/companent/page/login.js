import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
// import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import'react-toast/dist/R'

// const loginUser = () => {
//   // const history = useNavigate();
//   // const [inputs, setInputs] = useState({
//   //     email: '',
//   //     password: '',

//   // });
//   // const [checked, setChecked] = useState(false)

// }


// const handleChange = (e) => {
//     setInputs((prevState) => ({
//         ...prevState,
//         [e.target.email]: e.password.value
//     }))
// }

// const sendReqest = async () => {
//     axios.post("http://localhost:5000/books", {
//         email: String(inputs.email),
//         password: String(inputs.password),

//     }).then(res => res.data)
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs, checked);
//     sendReqest().then(() => history('/books'));
// }

function Login() {
  let navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const loginUser = () => {
    // console.log("ajsdlajsldkajd");
    console.log("email: " + emailInput + "\nPassword: " + passwordInput);
    axios.post("http://localhost:5000/auth/login",{
      email: emailInput,
      password: passwordInput

    }).then(function (response) {
      // toast.success("Register Success Please Login");
      console.log(response.data.token)
      console.log(response.data.username)
      console.log(response.data)
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("username",( response.data.username))

      navigate("/", { replace: true });
      
    }).catch(function (error) {
      toast.error("the user not found")
//  toast.warn("the email or passwored is not correct!")
// console.log("warn")
// alert("the email or passwored is not correct!")
    });
  }

  return (
    <div className='row'>
            <ToastContainer position="top-center" />
      <div className='col-12'>
        <div className='create'>
          <form className="text-start" >
            <div class="mb-3 p-3 container col-6">
              <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
              <input value={emailInput} onInput={e => setEmailInput(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              <div id="emailHelp" class="form-text">required</div>
              {/* <input type="text" class="form-control" id="validationCustom01" value="Mark" required> */}
              <div class="valid-feedback" />
            </div>
            <div class="col-6 mb-3  container ">
              <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" value={passwordInput} onInput={e => setPasswordInput(e.target.value)} class="form-control" id="exampleInputPassword1" required />
              <div class="valid-feedback" />
            </div>

             <div className="mb-2 d-grid  d-md-flex  justify-content-md-center">
            <button onClick={loginUser} type="button" class="col-3 btn btn-primary mb-3  " >login</button>

            </div>
          </form>

          <div class="mb-2 d-grid  d-md-flex  justify-content-md-center">
        
          <Link to="/signup" class="col-3 btn btn-outline-secondary" type="button">I don't have account</Link>
          </div>
          {/* <Add/> */}


        </div>
      </div>
    </div>
  )
}

export default Login