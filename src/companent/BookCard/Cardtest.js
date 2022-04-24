import React from 'react'
import "./card.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { height } from '@mui/system';

export function Cardtest({ book }) {

  console.log(book)



  const { _id, name, author, description, price, image } = book;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/category/${_id}`)
      .then(res => res.data)
      .then(() => history('/'))
      .then(() => history('/category'));

  }

  return (

    <>

      {/* <div className="container " > */}
        {/* <div className="row"> */}
          {/* <div className="col-lg-12"> */}

            <div className='card  mt-3  text-dark border-0 shadow my-3 '  style={{ maxHeight:"25rem"}}>
              <div className='card-title  text-muted m-auto' >

              </div>
              <div className="card-body">
               <strong><h5 className="card-title">{book.name}</h5>  </strong> 
               <img id='img' src={book.image} class="card-img-top " alt="..." style={{ maxHeight:"16rem"}} ></img>
                  {/* <Link onClick={"UpdateCate"} to={`/UpdateCate/${_id}`} class="btn  m-2 mb-2 btnn" type="button">Update</Link> */}
                  {/* <Link onClick={deleteHandler} sx={{ mt: 'auto' }} to="#" class="btn  m-2 mb-2 btnn" type="button">Deletee</Link> */}
              </div>
            </div>
       

    </>
  )
}


export default Cardtest