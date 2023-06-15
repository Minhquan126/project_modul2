import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { act_quantity } from '../redux/action'
import { act_delete_cart } from '../redux/action'
export default function Cart(props) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
 let { product } = props
//  console.log("product",product);
  // useEffect(() => {
   
  //   dispatch(act_quantity(product))
  // }, [quantity])
  useEffect(() => {
    setQuantity(product.product.quantity)
  },[product])
  const handleDelete = (id) => {
dispatch(act_delete_cart(id))
  }
  return (
    <div>
      <div key={product.id} className="card-body">
        <hr className="my-4" />
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

            <div
              className="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <img
              width={100}
                src={product.product.url}
                className="w-100"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                />
              </a>
            </div>

          </div>
          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">

            <p>
              <strong>{product.product.productName}</strong>
            </p>

            <button
            onClick={() => handleDelete(product.id)}
              type="button"
              className="btn btn-primary btn-sm me-1 mb-2"
              data-mdb-toggle="tooltip"
              title="Remove item"
            >
              <i className="bi bi-trash"></i>
            </button>

            <p>Tổng tiền : {quantity * product.product.price} Đ</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

            <div className="d-flex mb-4" style={{ maxWidth: 300 }}>

              <div className="form-outline">
                <input
                  id="form1"
                  min={0}
                  name="quantity"
                  value={quantity}
                  type="number"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
<label>Số lượng</label>
              </div>

            </div>

            <p className="text-start text-md-center">
              <strong>Giá : {product.product.price}</strong>
            </p>

          </div>
        </div>

      </div>

    </div>
  )
}
