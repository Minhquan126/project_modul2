import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_get_travel } from '../../redux/action'
export default function TravelBags() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(act_get_travel())
  }, [])
  let listTravel = useSelector(state => state.travel)
  
  return (
    <div>
      {listTravel.map((travel, index) =>
        <div key={index} className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={travel.url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{travel.productName}</h5>
            <p className="card-text">
              {travel.title}
            </p>
            <a href="#" className="btn btn-primary">
              {travel.price}
            </a>
            <button className='btn btn-success'><i className="bi bi-cart3"></i></button>
          </div>
        </div>)}
    </div>
  )
}
