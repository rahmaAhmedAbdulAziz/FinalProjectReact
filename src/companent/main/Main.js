import { color } from '@mui/system'
import React from 'react'
import './Main.css'

function Main() {
  return (
    <div className=''>

      <div className='header'>
        <div className='row1 mt-3' >
          <h1 >A room without books is like <br />
            a body withouta soul.
          </h1>
        </div>
        <div className='row position-relative g-0' style={{ backgroundColor: "#755139ff" }}>
          <div className='col-12 d-flex justify-content-between'>
            <div>
              <img src='/assete/book.svg' className='image'></img>

            </div>
            <div className='header-text'>
              <h1 style={{ margin: "10%", color:"white"}}><strong>Find Your Book</strong></h1>
              <div className='search'>
                <input type="text" placeholder='Enter Your Book Name' style={{ width: "50%" }} />
                <button style={{ width: "7%" , color:"blue" }}>
                  <i class="fa-solid fa-magnifying-glass text-white"  ></i>
                </button>
              </div>

            </div>
           
            </div>

          </div>


        </div>
        {/* <div className='container'>
        </div> */}
      </div>
      )

}

      export default Main