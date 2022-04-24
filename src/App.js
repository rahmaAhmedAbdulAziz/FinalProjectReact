import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Nav from './companent/Nav/Nav.js';
// import Header from './companent/Header/Header';
import BooksCategories from './companent/BooksCategories/BooksCategories';
import Login from './companent/page/login';
import Registeration from './companent/page/Registeration';
import Main from './companent/main/Main';
import User from './Authores/User';
import Categories from './companent/Categories/Categories';
import AddBook from './companent/page/AddBook';
import Update from './companent/page/Update';
import UpdateUser from './Authores/UpdateUser'
import AddUser from './Authores/AddUser'
import AddCat from './companent/page/AddCat'
import UpdateCate from './companent/page/UpdateCat'
import Cardtest from './companent/BookCard/Cardtest'

// import Cookies from 'universal-cookie';
// import axios from 'axios';

// axios.defaults.withCredentials=true
import { useEffect, useState } from 'react'


// const cookies = new Cookies();

function App() {
  // const createCookie = () =>{
  //   axios.get('http://localhost:5000',{withCredentials:true}).then((res) =>{
  //     console.log(res.data)
  //   })
    // cookies.set('name', 'rahma', { sameSite:'strict', path: '/' , expires:new Date(new Date().getTime()+5 *1000), httpOnly:true});
  // }

  // const deleteCookie = () =>{
  //   axios.get('http://localhost:5000/deleteCookie',{withCredentials:true}).then((res) =>{
  //     console.log(res.data)
  //   })
  //   // cookies.set('name', 'rahma', { sameSite:'strict', path: '/' , expires:new Date(new Date().getTime()+5 *1000), httpOnly:true});

  // }
  let token = localStorage.getItem("token")
//   // console.log(token+"rahma")
// let token=""

  useEffect(() => {
    //  token = localStorage.getItem("token")
    console.log(token+"raaaaaaaaahma")
// setshowlogin(false)  
    

  },[token])
  console.log(token)

  return (
    <>
            {/* <button onClick={createCookie}> </button>  */}


      <div className="App">
      {/* <div>
  <button className='showSnackbarBttn'>show</button> */}
  {/* <Snackbar message="email or password isnot correct"/> */}
  {/* </div> */}
        {/* <Registeration/> */}

        <BrowserRouter>
        {/* <Header /> */}
        <Nav token={token} />
        {/* <Main/> */}
        {/* <Categories/> */}
      {/* <Cardtest/> */}
          <Routes>
            
            {/* <Route exact path="/"></Route> */}
            <Route exact path='/' element={   <Main/> }></Route> 

            <Route exact path='/BooksCategories' element={ <BooksCategories /> }></Route>
            <Route exact path='/categories' element={ <Categories /> }></Route>
            <Route exact path='/login' element={ <Login/> }></Route> 
             <Route exact path='/signup' element={ <Registeration/> }></Route> 
              
               <Route exact path='/Add' element={ <AddBook/> }></Route>
               <Route exact path='/Update/:id' element={ <Update/> }></Route>
               <Route exact path='/UpdateCate/:id' element={ <UpdateCate/> }></Route>

             <Route exact path='/User' element={ <User/> }></Route> 
             <Route exact path='/UpdateUser/:id' element={ <UpdateUser/> }></Route> 
             <Route exact path='/AddUser' element={ <AddUser/> }></Route> 
             <Route exact path='/AddCat' element={ <AddCat/> }></Route> 

             <Route exact path='/Cardtest' element={ <Cardtest/> }></Route> 


             
           </Routes> 
         </BrowserRouter> 


      </div>
    </>
  );
}

export default App;

// Parent component
// val books = [{title: "Title", image: "Image", author: "Author"}, {title: "Title", image: "Image", author: "Author"}]
// for loop books -> childComponent

// Child component
// export function Book(book){
  // <div>book.title</div>
  // <div>book.author</div>
//}