import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const id = useParams().id;
  const history = useNavigate();

  // const params= useParams();
  // console.log(params.id);

  useEffect(() => {

    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then(res => res.data)
        .then(data => setInputs(data.book))
    }


    fetchHandler();

  }, [id])
  useEffect(() => {

    let local = localStorage.getItem('token')
    if (local === null) {
      history('/login')

    }

  }, [])
  const sendReqest = async () => {
    axios.put(`http://localhost:5000/books/${id}`, {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
    }).then(res => res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendReqest().then(() => history('/books'));

  }

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  // console.log(inputs);

  return (
    <div>
      {inputs && (
        <form className="container mt-3 " onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Name</strong></label>
            <input type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp" value={inputs.name} name="name" onChange={handleChange} />
            <div id="textHelp" class="form-text"></div>
          </div>
          <div class="mb-3">
            <label for="exampleInputtext" class="form-label"><strong>Author</strong></label>
            <input type="text" class="form-control" id="exampleInputtext" name="author" value={inputs.author} onChange={handleChange} />
          </div> <div class="mb-3">
            <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Description</strong></label>
            <input type="text" class="form-control" id="exampleInputtext" name="description" aria-describedby="textHelp" value={inputs.description} onChange={handleChange} />
            <div id="textHelp" class="form-text"></div>
          </div> <div class="mb-3">
            <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Price</strong></label>
            <input type="text" class="form-control" id="exampleInputtext" name="price" aria-describedby="textHelp" value={inputs.price} onChange={handleChange} />
            <div id="textHelp" class="form-text"></div>
          </div> <div class="mb-3">
            <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Image</strong></label>
            <input type="text" class="form-control" id="exampleInputtext" name="image" aria-describedby="textHelp" value={inputs.image} onChange={handleChange} />
            <div id="textHelp" class="form-text"></div>
          </div>
          {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
          <Link onClick={"BooksCategories"} to={"/BooksCategories"}><button type="submit" class="btn btn-primary mb-2">Update</button>
          </Link>
        </form>
      )}
    </div>
  )
}
// }
// up date
export default Update