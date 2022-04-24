import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    author: '',
    description: '',
    price: '',
    image: '',
    catName: ''
  });
  const [checked, setChecked] = useState(false)


  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
    console.log(e.target)
  }

  const sendReqest = async () => {
    axios.post("http://localhost:5000/books", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
      catName: String(inputs.catName)
    },{
      // headers:{
      //   autheraization:"gfgfgf"
      // }
    }).then(res => res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendReqest().then(() => history('/books'));
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-3 ">

      {/* check  */}
      <div class="mb-3 text-start">
        <label for="name" class="form-label flex-start"><strong className=" flex-start">categorey Name</strong></label>
        <input type="text" class="form-control" id="catName" aria-describedby="textHelp" onChange={handleChange} />
        <div id="textHelp" class="form-text"></div>
      </div>
      <div class="mb-3 text-start">
        <label for="catName" class="form-label flex-start"><strong className=" flex-start">Name </strong></label>
        <input type="text" class="form-control" id="name" aria-describedby="textHelp" onChange={handleChange} />
        <div id="textHelp" class="form-text"></div>
      </div>
      <div class="mb-3 text-start">
        <label for="author" class="form-label"><strong>Author</strong></label>
        <input type="text" class="form-control" id="author" onChange={handleChange} />
      </div> <div class="mb-3 text-start">
        <label for="description" class="form-label flex-start"><strong className=" flex-start">Description</strong></label>
        <input type="text" class="form-control" id="description" aria-describedby="textHelp" onChange={handleChange} />
        <div id="textHelp" class="form-text"></div>
      </div> <div class="mb-3">
        <label for="price" class="form-label flex-start"><strong className=" flex-start">Price</strong></label>
        <input type="text" class="form-control" id="price" aria-describedby="textHelp" onChange={handleChange} />
        <div id="textHelp" class="form-text"></div>
      </div>
      <div class="mb-3 text-start">
    <label for="image" class="form-label flex-start"><strong className=" flex-start">Image</strong></label>
    <input type="text" class="form-control" id="image" aria-describedby="textHelp"onChange={handleChange} />
    <div id="textHelp" class="form-text"></div>
    {/* <div action="/action"> */}
    <input type="file" id="myFile" /> <br /><br />
     
    <input type="submit" value="submit" />



  </div> 
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button onSubmit={handleSubmit} type="submit" class="btn btn-primary mb-2">AddBook</button>
    </form>


  )

}
// add
export default AddBook;