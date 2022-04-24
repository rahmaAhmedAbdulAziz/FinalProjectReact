import React from 'react'
import BooksCategories from '../BooksCategories/BooksCategories'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Cardtest } from '../BookCard/Cardtest'
import { Link ,useNavigate} from "react-router-dom";
export default function Categories() {

    const [Categories, setCategories] = useState([]);
    const { _id, name, author, description, price, image } = Categories;
console.log(Categories)
    useEffect(() => {
      axios.get('http://localhost:5000/category')
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err));
        
    },[])

    console.log(Categories)

    const history = useNavigate();
    const deleteHandler = async (id) => {
      await axios
        .delete(`http://localhost:5000/category/${id}`)
        .then(res => res.data)
        .then(() => history('/'))
        .then(() => history('/auth'));
  
    }
  return (
    <div className=' container'>
        {/* <ul> */}
            {/* <li> */}
            <Link onClick={"AddCat"} to={"/AddCat"} class="btn btnn  mb-5 my-2 w-22" style={{float:"right"}} type="button">
            <i class="fa-solid fa-plus"></i>
              Add Categories</Link>
            {Categories.map((book) => (
              <>
                
           
           <a href='/BooksCategories' book = {book}>  
            <h1 className='text-start'> {book.name}</h1>  </a>
            <Link  to={`/UpdateCate/${book._id}`} class="btn  m-2 mb-2 btnn" style={{float:"right"}} type="button">Update</Link>
            <Link onClick={()=>deleteHandler(book._id)} sx={{ mt: 'auto' }} to="#" style={{float:"right"}} class="btn  m-2 mb-2 btnn" type="button"><i class="fa-solid fa-trash"> delete</i></Link>


           <div className='row'>

           {/* <ul> */}
           {book.books.map((book)=>(
             <div className='col-4'>
           <Cardtest book={book}></Cardtest>
           </div>

           ))}
           {/* </ul> */}
           </div>
          </>

          ))}

    </div>
  )
}

