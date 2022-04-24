import React from 'react'
// import {useHistory} from 'react'
import { Link } from "react-router-dom";
// let history=useHistory
import { useEffect, useState } from 'react'
import Nav from './Nav'

function NavLogout({ username }) {

  //  window.removeLocalStorage.setItem("")
  // username:any
  // token = json.parse(localStorage.getItem("token"))
  // console.log(this.username)

  // const  [showlogin, setshowlogin] = useState([]); 
  // useEffect(() => {
  //   // axios.get('http://localhost:5000/auth')
  //     .then((res) => setCategories(res.data))
  //     .catch((err) => console.log(err));

  // },[])
  // console.log(token)
  return (
    <>
      {/* {token ? <Nav /> : */}
// console.log(token)
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid p-0 m-0">
              <img id='imgل' src="/assete/logoBG.png" alt="" height="80px" style={{ margin: "0px" }} />

              <a className="navbar-nav active" href="/">
                <i className="fa-solid fa-house-chimney m-1"></i>
                HOME</a>
              <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/BooksCategories"}>
                      <strong>Book</strong>
                    </Link>

                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="/categories">
        
            <i className="fa-solid fa-bezier-curve m-1"></i>                 
                Book Categories</a> */}
                    <Link className="nav-link active" to={"/categories"}><strong> catogary </strong></Link>

                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/User"} onClick={"User"} >
                      <i className="fa-solid fa-user-tie m-1"></i>

                      <strong>User</strong>
                    </Link>
                  </li>
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    username</a>

                </ul>
                <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                  {/* <Link to="/signup" className="btn btn-outline-secondary me-md-1" type="button" >
     {/* onClick={() => {history.push("/login");}} >   */}
                  {/* <i className="fa-solid fa-right-to-bracket m-2"></i>
    sign in</Link> */}
                  <Link onClick={"login"} to={"/login"} className=" btn btn-outline-secondary me-md-4" type="button">
                    {/* <i className="fa-solid fa-user m-2 m-2"></i> */}

                    <i className="fa-solid fa-right-to-bracket m-2"></i>
                    Logout</Link>

                  {/* <Link to="signup" className=" btn btn-secondary me-md-1" type="button">
     <i className="fa-solid fa-user m-2 m-2"></i>
       sign up</Link>  */}


                  {/* 
  <link to="login" className="btn btn-secondary me-md-5" type="button">
  <i className="fa-solid fa-user m-2"></i>
    sign up</link>
     */}
                </div>
              </div>
            </div>
          </nav></div>
      {/* } */}
    </>
  )
}

export default NavLogout