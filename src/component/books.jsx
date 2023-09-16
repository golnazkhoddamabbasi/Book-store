import { NavLink , Outlet , useSearchParams , useLocation } from "react-router-dom"
import { getBooks } from "../data"


const Books =()=>{
const [searchpara , setsearchpara]=useSearchParams()
const location=useLocation()
const books = getBooks()
    return(
<div style={{marginTop:"1rem" , display:"flex"}}>

<nav style={{borderRight:"solid 1px", padding:"1rem "}}>
<input
 type="text"
value={searchpara.get("filter") ||  "" }
onChange={(event) => {
 let filter = event.target.value;  
 if (filter) {
    setsearchpara({ filter })
 } else {
    setsearchpara({})
 }
 }}
 placeholder="serach ..."/>

{books.filter((book) => {
    let filter=searchpara.get("filter")
    if (!filter) return true
    let name = book.name.toLowerCase()
    return name.startsWith(filter.toLowerCase());
})
.map((book)=>(
 <NavLink style={({isActive})=>{
    return{ display:"block" , 
    margin:"1rem 0 ",
    color:isActive? "red" :"black ",
    textDecoration:"none"

}
 }} to={`/books/${book.number}${location.search}`} key={book.number}>
    {book.name}
 </NavLink>
))}
</nav>
<Outlet/>
</div>
    )
}
export default Books