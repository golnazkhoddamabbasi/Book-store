import { useParams , useNavigate , useLocation} from "react-router-dom"
import { getBook , deletBook } from "../data"
const Book=()=>{
   const param =useParams()
   const book =getBook(parseInt(param.bookId))
   const navigate=useNavigate()
   const location=useLocation()
   if(book){
      return(
         <div style={{margin:"2rem"}}>
         <main style={{padding:"1 rem"}}>
           <h2>price :{`${book.amount} $`}</h2>
           <p>{book.name}</p>
           <p>{book.due}</p>
           <p>
              <button onClick={()=>{
               deletBook(book.number)
               navigate("/books" + location.search)               

              }}>Delete</button>
           </p>
     
         </main>
         </div>
        ) 
   } else{
      return(
         <main style={{padding:"1 rem"}}>
         <h2 style={{margin:"1rem"}}>not found !!! </h2>
         </main> 
      )
   }
 
}
export default Book