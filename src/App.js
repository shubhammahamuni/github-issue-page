import logo from './logo.svg';
import './App.css';
import Pagination from "./pagination"
import arr from "./data"
import {useState} from "react"
import Issuelist from "./issuelist"
import { Badge } from 'react-bootstrap';

function App() {
  
  const[currentpage , setcurrentpage] = useState(1);
  const[postperpage , setpostperpage] = useState(10);  
  const lastindex = currentpage * postperpage;
  const firstindex = lastindex - postperpage;
  const slicedarray = arr.slice(firstindex , lastindex);
  const d = new Date();

  const handlepage_navigation = (pagenumber)=>{
      setcurrentpage(pagenumber);
  }


  return (


    


    <div className="container mt-4">
     <h1>GitHub Issue page</h1>
     
   
   <Issuelist slicedarray= {slicedarray} d ={d}/>  
  <Pagination totalpost ={arr.length} postperpage={postperpage} handlepage_navigation = {handlepage_navigation}/> 
    </div>
  );
}

export default App;
