import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// function UpdateCat() {
const UpdateCat = () => {
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState(false);
    const id = useParams().id;
    const history = useNavigate();
console.log(id+"llalkaaaaaaa")
console.log(inputs)
    useEffect(() => {

        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/category/${id}`)
                .then(res =>  
                    {setInputs(res.data)
                       console.log( res.data)
                    }
                    )
                
                // .then(data => setInputs(data.category))
                
        }

        fetchHandler();

    }, [id])

    const sendReqest = async () => {
        axios.put(`http://localhost:5000/category/${id}`, {
            name: String(inputs.name),
            description: String(inputs.description),
         
        }).then(res => res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendReqest().then(() => history('/category'));

    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

  return (
         <div>
            {inputs && (
            <form className="container mt-3 " onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Name</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp" value={inputs.name} name="name" onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div>
  {/* <div class="mb-3">
    <label for="exampleInputtext" class="form-label"><strong>Author</strong></label>
    <input type="text" class="form-control" id="exampleInputtext" name="author" value={inputs.author} onChange={handleChange}/>
  </div> */}
   <div class="mb-3">
    <label for="exampledescriptiontext" class="form-label flex-start"><strong className=" flex-start">Description</strong></label>
    <input type="text" class="form-control" id="exampledescriptiontext" name="description" aria-describedby="textHelp" value={inputs.description} onChange={handleChange}/>
    <div id="textHelp" class="form-text"></div>
  </div>
{/* </div> <div class="mb-3">
<label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Price</strong></label>
<input type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp"/>
<div id="textHelp" class="form-text"></div> */}
{/* </div> <div class="mb-3">
<label for="exampleInputtext" class="form-label flex-start"><strong className=" flex-start">Image</strong></label>
<input type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp"/>
<div id="textHelp" class="form-text"></div>
</div> 
{/* <div class="mb-3 form-check"> */}
{/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div> */} 
<button onSubmit={handleSubmit} type="submit" class="btn btn-primary mb-2">Update</button>
</form>
    )}       
</div>

)
}
export default UpdateCat