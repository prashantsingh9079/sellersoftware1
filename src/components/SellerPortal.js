import React,{useState} from 'react'

export default function SellerPortal(props) {

    const [pid, setPid] = useState('');
    const [pname, setPname] = useState('');
    const [amount, setAmount] = useState('');


    function productIDHandler(e)
    {
        setPid(e.target.value)
    }
    
    function productNameHandler(e)
    {
        setPname(e.target.value);
    }

    function amountHandler(e)
    {
        setAmount(e.target.value);
    }



    const dataHandler = (e) =>{
        e.preventDefault();
        const dataObj = {pid,pname,amount};
        localStorage.setItem(pid,JSON.stringify(dataObj));
        props.add(dataObj);
    }
    return (
        <div className='container'>
            <div className="form-outline ">
                <input onChange={productIDHandler} type="text" id="form12" className="form-control"  />
                <label className="form-label" htmlFor="form12">Product ID</label>
            </div>
            <div className="form-outline">
                <input onChange={productNameHandler} type="text" id="form12" className="form-control" />
                <label className="form-label" htmlFor="form12">Product Name</label>
            </div>
            <div className="form-outline ">
                <input onChange={amountHandler} type="number" id="form12" className="form-control" />
                <label className="form-label" htmlFor="form12">Selling Price</label>
            </div>
            <button onClick={dataHandler} type="button" className="btn btn-primary">Add Product</button>
        </div>
    )
}


