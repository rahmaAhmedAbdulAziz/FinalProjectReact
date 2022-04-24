import React from 'react'
import { Link } from 'react-router-dom'

function Registeration() {
  return (<div className='container'>
    <form >
      <div className='row'style={{margin:"5px"}}>
  <div class="mb-3 col-6">
    <label for="exampleInputEmail1" class="form-label" required>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 col-6">
    <label for="exampleInputPassword1" class="form-label" required>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" required/>
  </div>
  </div>
  <div className='row'>
    <div className="col-4">
      <label htmlFor="inputAddress" className="form-label" required>Address</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    
    <div className="col-md-4">
      <label htmlFor="inputCity" className="form-label" required>City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
   
    <div className="col-md-4">
      <label for="inputZip" className="form-label" required >Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
    </div>
    <div class="mb-3 form-check"/>

    <div className="col-12" >
    <Link to="/signup" onclick="myFunction()" type="submit" class=" btn btn-primary " style={{margin:"5px"}}>Sign in</Link>
      {/* <Link to="/" onclick="myFunction()" type="submit" className="btn btn-primary " >Sign in</Link> */}
    </div>
  </form>
  </div>
  )
}
// عايزين نخلي المدخلات مطلوبه 

export default Registeration