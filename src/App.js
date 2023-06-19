import React,{useState} from "react";
import SellerPortal from "./components/SellerPortal";
import './App.css'
import ShowItem from "./components/ShowItem";

function App() {
  
const [items,setItems] = useState([]);


function addItems(obj)
{

  setItems((prevState)=>{
    return [...prevState, {id:obj.pid,name:obj.pname,amount:obj.amount,key:obj.pid}];
  })
}
let total=0;

function abc(idd)
{

  
  setItems((p)=>{
    return p.filter((x)=>{
      return (x.id!==idd)
    })
  })

  // setT((p)=>{
  //   return ()
  // })
}

let Show = (<i>No Items</i>)

if(items.length>0)
{
  Show = (
    <ShowItem item={items} deleteFromUI={abc}/>
  )
  var sum=[];
  items.map((i,j)=>{
    sum[j]=parseInt(i.amount);
    return 0;
  })
  total=0;
  sum.forEach(item => {
    total += item;
});

}


  return (
    <>
    <SellerPortal add={addItems}/>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Product ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Amount</th>
    </tr>
  </thead>
  </table>

    {Show}
    <hr />
    <h4>Total Sum is {total}</h4>
    </>
    
  );
}

export default App;
