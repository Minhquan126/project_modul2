import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { act_logout_user } from '../redux/action';
import { act_shopping_cart } from '../redux/action';
import { act_search_product } from '../redux/action';
import { act_patch_cart } from '../redux/action';
import { act_product_acrt } from '../redux/action';
import { act_get_cloth } from '../redux/action';

export default function Navbar() {
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(false)
  const [name, setName] = useState("")
  const [searchData,setSearchData] = useState("")
  const [quantity,setQuantity] = useState(1)
  let user = useSelector(state => state.userlogin)
  useEffect(() => {
    dispatch(act_get_cloth())
  }, [])
  useEffect(() => {
    dispatch(act_shopping_cart(user[0]))
  }, [user])
  let productCart = useSelector( state => state.productCart)
  // console.log("productCart",productCart);
  useEffect(() => {
    if (user.length !== 0) {
      setIsLogin(true)
      setName(user[0].userName)
    }
  }, [user])
  let listSearch = useSelector(state => state.listSearch)
  console.log("lítSearch", listSearch);
  const handleBuy = (cloth) => {
    let check = false
    let productUpdate
    for (let i = 0; i < productCart.length; i++) {
      if (cloth.id === productCart[i].product.id) {
        check = true
        productCart[i].product.quantity += 1
        productUpdate = productCart[i]
      } 
      if (check) {
        dispatch(act_patch_cart(productUpdate))
      } else {
        dispatch(act_product_acrt(user[0].id, cloth))
      }
      
    }
  }
  const handleLogOut = () => {
    dispatch(act_logout_user())
    setIsLogin(false)
    setName("")
  }
  const gotoShopping = () => {
    if (isLogin) {
      navigate("/shopping")
    } else {
      navigate("/login")
    }
  }
  const searchProduct = (e) => {
    e.preventDefault()
dispatch(act_search_product(searchData))
  }
  
  const navigate = useNavigate()
  let elementDropdown = ""
  if (isLogin) {
    elementDropdown = <Dropdown.Menu>
      <Dropdown.Item onClick={handleLogOut} >LogOut</Dropdown.Item>
    </Dropdown.Menu>
  } else {
    elementDropdown = <Dropdown.Menu>
      <Dropdown.Item onClick={() => navigate("/login")} >LogIn</Dropdown.Item>
      <Dropdown.Item onClick={() => navigate("/register")} >Register</Dropdown.Item>
    </Dropdown.Menu>
  }
  return (
    <div>
      <div className='navbar'>

        <img src={require('../image/i-n-may-logo.png')} />
        <form>
          <div className="search-input">
            <input
            onChange={(e => setSearchData(e.target.value))}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Từ khóa tìm kiếm"
            />
            <button style={{borderRadius:10}} onClick={searchProduct}><i className="bi bi-search"></i></button>
            
          </div>
        </form>
        <div>

          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              {name} <i className="bi bi-person"></i>
            </Dropdown.Toggle>
            {elementDropdown}          </Dropdown>
          <div className='tick-container'>
            <div className='tick'>{productCart.length}</div>
            <i onClick={gotoShopping} className="bi bi-bag-check"></i>           
          </div>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require('../image/slider/slide-1-sl-1.png')} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('../image/slider/slider-2-sl-2.png')} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('../image/slider/slide-3-sl-3.png')} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div>
        <img width={400} onClick={() => navigate("/cloth")} src={require("../image/catalog/tui-eo-cheo-h3-banner1.jpg")} />
        <img width={400} onClick={() => navigate("/travel")} src={require("../image/catalog/balo-th-i-trang-h3-banner2.jpg")} />
        <img width={400} onClick={() => navigate("/summer")} src={require("../image/catalog/tui-xach-n-h3-banner5.jpg")} />

      </div>
      <div className='cloth-container'>
      
      {listSearch.map((cloth, index) =>
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
                    <img src={cloth.url} alt="product-image" />
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
    </div>
  )
}
