import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {Card } from '../BookCard/Card.js'

export function BooksCategories() {
  const [BooksCategories, setBooksCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((res) => setBooksCategories(res.data.books))
    
      .catch((err) => console.log(err));
    // return() =>{
    //   console.log("DESTROYED");
    // };
  }, []);
  console.log(BooksCategories)
  return (
    <div className='container'>
      
     <Link onClick={"Add"} to={"/Add"} class="btn btnn  mb-5 my-2 w-22" style={{float:"right"}} type="button">
     <i class="fa-solid fa-plus"></i>
       AddBook</Link>

    <div className='row'>

      {/* <ul> */}
        {/* {BooksCategories.map(BooksCategory=>(
         
          // <Link to={`/categories/${BooksCategory.rank}`} key= {BooksCategory.rank}>
          //   <li>{BooksCategory.rank}</li>
          // </Link>
           BooksCategory
          
          

          // <li key={BooksCategory.rank}>
          //   {BooksCategory.rank}
          // </li>
        ))} */}
        {/* لو الحاجة مش متعرفة متعرضهاش او ما تيجي اعرضها */}
         {BooksCategories?.map((category) => (
           <>
       
           <div className='col-4'>
           <Card book = {category}></Card>
           </div>
           </>
          ))}

      {/* </ul> */}

    </div>
    </div>
  );
}
export default BooksCategories











// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// export function BooksCategories() {
//   const [BooksCategories, setBooksCategories] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AdTgIpm8pXX1GSAJJCAGKQmhItwkAMfk')
//       .then((res) => setBooksCategories(res.data))
//       .catch((err) => console.log(err));
//     // return() =>{
//     //   console.log("DESTROYED");
//     // };
//   }, []);
//   return (
//     <div>Books Categories
//       <ul>
//         {BooksCategories.map(BooksCategory => {
//           return <link  to={'/BookCategories ${BooksCategory.rank}'} key={BooksCategory.rank}>
//             {BooksCategory.rank}
//           </link>
//           //  <li key={BooksCategory.rank}>
//           //   {BooksCategory.rank}
//           // </li>
//         })}
//       </ul>

//     </div>
//   );
// }
// export default BooksCategories

