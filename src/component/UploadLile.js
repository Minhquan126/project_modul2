import React from 'react'
import { useState, useEffect } from "react";
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { act_delete_product, act_edit_product, act_get_cloth, act_upload_cloth, act_upload_summer, act_upload_travel } from '../redux/action';
import { useNavigate } from 'react-router-dom';


export default function UploadLile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const [id, setId] = useState("")
  const [productName, setProductName] = useState("")
  const [productTitle, setProductTitle] = useState("")
  const [price, setPrice] = useState("")
  const [product, setProduct] = ([{ id: id, productName: productName, quantity: quantity, price: price, url: imageUrls, productTitle: productTitle }])

  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url)
      });
    });
  };

  // Lấy dữ liệu trả về từ firebase
  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(url)
        });
      });
    });
  }, []);
  const handleCloth = () => {
    dispatch(act_upload_cloth(product))
    navigate("/cloth")
  }
  const handleTravle = () => {
    dispatch(act_upload_travel(product))
    navigate("/travel")
  }
  const handleSummer = () => {
    dispatch(act_upload_summer(product))
    navigate("/summer")
  }
  useEffect(() => {
    dispatch(act_get_cloth())
  }, [])
  const listProducts = useSelector(state => state.cloth)
  const handleEdit = (productUpdate) => {
    setId(productUpdate.id)
    setProductName(productUpdate.productName)
    setPrice(productUpdate.price)
    setProductTitle(productUpdate.productTitle)
  }
  const handleDelete = (id) => {
    dispatch(act_delete_product(id))
  }
  const hanldeUpdate = () => {
    dispatch(act_edit_product(product))
  }
  return (

    <div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Product Name</label>
        <input
          value={productName} onChange={(e) => setProductName(e.target.value)}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="product name..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Product Price</label>
        <input
          value={price} onChange={(e) => setPrice(e.target.value)}
          type="number"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="price..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Product Title</label>
        <input
          value={productTitle} onChange={(e) => setProductTitle(e.target.value)}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="product title..."
        />
      </div>
      <input
        type='file'
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      <button className='btn btn-success' onClick={hanldeUpdate}>Update</button>
<button onClick={() => navigate("/admin")}>Quản lý người dùng</button>
      <div>

      </div>

      <div className="card" style={{ width: "18rem" }}>

        <div className="card" style={{ width: "18rem" }}>
          <img  className="card-img-top" src={imageUrls} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">
              {productTitle}
            </p>
            <a href="#" className="btn btn-primary">
              {price}
            </a>
            <button onClick={handleCloth}>cloth</button>
            <button onClick={handleTravle}>travel</button>
            <button onClick={handleSummer}>summer</button>
          </div>
        </div>

      </div>
      <table>
        <thead>
          <tr>
            <th>stt</th>
            <th>image</th>
            <th>name</th>
            <th>title</th>
            <th>price</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {listProducts.map((prd) => <tr key={prd.id}>

            <td>{prd.id}</td>
            <td><img className='image-upload' src={prd.url} alt="product-image" /></td>
            <td>{prd.productName}</td>
            <td>{prd.productTitle}</td>
            <td>{prd.price}</td>
            <td><button onClick={() => handleEdit(prd)}>Edit</button></td>
            <td><button onClick={() => handleDelete(prd.id)}>Delete</button></td>
          </tr>)}


        </tbody>
      </table>
    </div>


  )
}
