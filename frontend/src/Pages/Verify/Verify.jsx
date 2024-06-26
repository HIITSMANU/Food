import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import { useSearchParams,useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
const Verify = () => {
    const[search,setsearch] = useSearchParams();
    const success = search.get("success")
    const orderId = search.get("orderId")
    const navigate = useNavigate();
    console.log(success,orderId);
    const {url} = useContext(StoreContext)
    const verifyPayment = async() => {
        const res = await axios.post(url+"/api/order/verify",{success,orderId})
        if(res.data.success){
            navigate('/myorders')
        }
        else{
            navigate('/')
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])

  return (
    <div className='verify'>
        <div className="spinner"></div>
    </div>
  )
}

export default Verify
