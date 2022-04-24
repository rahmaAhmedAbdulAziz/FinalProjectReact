import React from 'react'
import "./card.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { height } from '@mui/system';

export function Card({ book }) {

  console.log(book)



  const { _id, name, author, description, price, image } = book;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then(res => res.data)
      .then(() => history('/'))
      .then(() => history('/books'));

  }

  return (

    <>

      {/* <div className="container " > */}
        {/* <div className="row"> */}
          {/* <div className="col-lg-12"> */}

            <div className='card  mt-3  text-dark border-0 shadow my-3 '  style={{ maxHeight:"25rem"}}>
              <div className='card-title  text-muted m-auto' >
                <img id='img' src={book.image} class="card-img-top " alt="..." style={{ maxHeight:"16rem"}} ></img>

              </div>
              <div className="card-body">
               <strong><h5 className="card-title">{book.name}</h5>  </strong> 
           {/* <h6>   <p className="card-text " style={{ maxHeight:"8rem"}}>{book.description}</p></h6>  */}
                {/* <ul className='col-6'> */}
                  <Link onClick={"Update"} to={`/Update/${book._id}`} class="btn  m-2 mb-2 btnn" type="button">Update</Link>
                  <Link onClick={deleteHandler} sx={{ mt: 'auto' }} to="#" class="btn  m-2 mb-2 btnn" type="button">Deletee</Link>
                {/* </ul> */}
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* // </div> */}

    </>
  )
}


export default Card