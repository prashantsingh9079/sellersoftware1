import React from 'react'

export default function ShowItem(props) {

function deleteItem(e)
{
    console.log(e.target.parentNode.textContent.split(' ')[0])
    props.deleteFromUI(e.target.parentNode.textContent.split(' ')[0]);
}



  return (
    props.item.map(
        (i) =>{
            return(
                <>
                <li>{i.id}  {i.name}    {i.amount} <button onClick={deleteItem}>Delete</button></li>
                
                </>
            )
        }
    )
  )
}
