import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { act_get_cloth, act_patch_cart, act_post_user, act_product_acrt } from '../../redux/action'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act_shopping_cart } from '../../redux/action'
export default function Clothbag() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
let user = useSelector(state => state.userlogin)
  
 
  useEffect(() => {
    dispatch(act_get_cloth())
  }, [])
  useEffect(() => {
    dispatch(act_shopping_cart(user[0].id))
  }, [user])
  let productCart = useSelector(state => state.productCart)
  const handleBuy = (cloth) => {
    let check = false
    let productUpdate 
    console.log("user============>",user);
    if (user.length===0) {
      navigate("/login")
    } else {
      if (user[0].status) {
        for (let i = 0; i < productCart.length; i++) {
     
      if (cloth.id === productCart[i].product.id) {
      
        check = true
        productCart[i].product.quantity += 1
        productUpdate = productCart[i]
        
      }}
      if(check) {
        dispatch(act_patch_cart(productUpdate))
      } else {dispatch(act_product_acrt(user[0].id, cloth))}
      } else {
        navigate("/")
      }
      
    }
    
    
  }
  let listCloth = useSelector(state => state.cloth)
  // console.log("listCloth",listCloth);
  return (
    <div className='cloth-container'>

      {listCloth.map((cloth, index) =>
  
        <div key={index} className="card" style={{ width: "18rem" }}>
          <img width={150} className="card-img-top" src={cloth.url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{cloth.productName}</h5>
            <p className="card-text">
              {cloth.title}
            </p>
            <div style={{ padding: "10" }}>
              <a href="#" className="btn btn-primary">
                {cloth.price} Đ
              </a>
              <button type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal" onClick={() => handleBuy(cloth)}><i className="bi bi-cart3"></i>
              </button>
            </div>

          </div>
          <>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Thêm vào giỏ hàng thành công
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <img width={150} src={cloth.url} alt="product-image" />
                    <p>{cloth.productName}</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-dismiss="modal"
                    >
                      Tiếp tục mua hàng
                    </button>
                    <button data-bs-dismiss="modal" onClick={() => navigate("/shopping")} type="button" className="btn btn-primary">
                      Đến giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        //modal

      )}


    </div>
  )
}
