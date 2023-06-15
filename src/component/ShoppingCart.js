import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act_get_productCart, act_put_user, act_shopping_cart, act_clear_cart } from '../redux/action'
import { act_logout_user } from '../redux/action'
import Cart from './Cart'
export default function ShoppingCart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")


  let user = useSelector(state => state.userlogin)
  
  useEffect(() => {
    dispatch(act_shopping_cart(user[0]))
  }, [user])
  let product = useSelector(state => state.productCart)
  const handlePay = () => {
 let neworder =  {...user[0],phoneNumber: phoneNumber, address: address, history:JSON.stringify(product)}
    dispatch(act_put_user(neworder))
    dispatch(act_clear_cart(product))
   
  }

  let total = product.reduce((sum, pro) => sum + pro.product.quantity * pro.product.price, 0)
  return (
    <div className='cart-container'>

      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div>
                <label>Số điện thoại</label>
                <input
                  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                  type="number"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="phone number..."
                />
                <label>Địa chỉ</label>
                <input
                  value={address} onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="address..."
                />
              </div>
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart items</h5>
                </div>
                {product && product.map((product) => <Cart key={product.id} product={product} />
                )}
              </div>

              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Hóa đơn</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products

              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Tổng cộng</strong>
                  <strong>
                    <p className="mb-0">(Đã gồm VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>{total}</strong>
                </span>
              </li>
            </ul>
            <button
              onClick={handlePay}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal" type="button" className="btn btn-primary btn-lg btn-block">
              Thanh toán!
            </button>
            <>

              {/* Modal */}
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
                        Cảm ơn bạn {user.userName}!
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      Bạn đã thanh toán thành công!
                    </div>
                    <div className="modal-footer">
                      <button
                        onClick={() => navigate("/")}
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Trở về trang chủ!
                      </button>
                
                    </div>
                  </div>
                </div>
              </div>
            </>

          </div>
        </div>
      </div>
    </div>
  )
}
