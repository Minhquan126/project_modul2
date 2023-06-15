import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_get_summer } from '../../redux/action'
export default function SummerSale() {
  const dispatch = useDispatch()
  useEffect(() => {
dispatch(act_get_summer())
  },[])
  let listSummer = useSelector(state => state.summer)
  
  return (
    <div>
 {listSummer.map((summer,index) => 
      <div key={index} className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={summer.url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{summer.productName}</h5>
          <p className="card-text">
           {summer.title}
          </p>
          <a href="#" className="btn btn-primary">
            {summer.price}
          </a>
          <button className='btn btn-success'><i className="bi bi-cart3"></i></button>
        </div>
      </div> )}
      
    </div>
  )
}
