import{ Link , Outlet } from "react-router-dom"
import './App.css';

const App = ()=> {
  return (
    <div className="App">
      <h1 style={{margin:"1rem"}}> Book store </h1>
 <nav style={{borderBottom:"solid 1px blue" , paddingTop:"1 rem "}}>
<Link to="/books" style={{marginRight:"1rem", textDecoration:"none" }}>Books </Link>
{ " "}
<Link to="/about" style={{ textDecoration:"none"}}> About</Link>

 </nav>
<Outlet/>
    </div>
  );
}

export default App;
