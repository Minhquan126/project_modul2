import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act_post_user } from '../redux/action'
export default function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let checkValidate = false
  const initialUser = {
    userName: "", email: "", password: "", repeatPassword: ""
  }
  const [errorMessage, setErrorMessage] = useState(initialUser)
  const [status,setStatus] = useState(true)
  const [id, setId] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const validateUser = (name, value) => {
    if (name === "userName") {
      
      if (value.trim() === "") {
        setErrorMessage({ ...errorMessage, userName: "Tên đăng nhập không được để trống!" })
        console.log("hhhhhh")
      } else {
      
        setErrorMessage({ ...errorMessage, userName: "" })
        
      }
      setUserName(value)
    }
    if (name === "email") {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (value.trim() === "") {
        setErrorMessage({ ...errorMessage, email: "Email không được để trống" })
      } else if (!pattern.test(value)) {
        setErrorMessage({ ...errorMessage, email: "Email không đúng định dạng" })
      } else {
        setErrorMessage({ ...errorMessage, email: "" })
        
      }
      setEmail(value)
    }
    if (name === "password") {
      if (value.trim() === "") {
        setErrorMessage({...errorMessage, password:"Password không được để trống"})
      } else if (value.length < 5) {
        setErrorMessage({...errorMessage,password:"Password quá ngắn"})
      } else {
        setErrorMessage({ ...errorMessage, password: "" })
        
      }
      setPassword(value)
    }
    if (name === "repeatPassword") {
        if (value !== password) {
          setErrorMessage({...errorMessage, repeatPassword:"Password không trùng khớp"})
      } else {
        setErrorMessage({ ...errorMessage, repeatPassword: "" })
        
      }
      setRepeatPassword(value)
    }
  }
  console.log("userName",userName);
  const handleChange=(e)=>{
    let name = e.target.name
    let value = e.target.value
    validateUser(name,value)
  }

  const handleRegister = () => {
    if (errorMessage.userName === ""&&errorMessage.email===""&&errorMessage.password===""&&errorMessage.repeatPassword==="") {
      console.log("vao if k");
       dispatch(act_post_user({ id, userName, email, password, status }))
    navigate("/login")
    } 
  }
  return (
    <div>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form>
                      <div className="form-outline mb-4">
                        <input
                          name='userName'
                          value={userName}
                          onChange={handleChange}
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                        />
                        <p className='text-danger'>{errorMessage.userName}</p>
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name='email'
                          value={email}
                          onChange={handleChange}
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                        <p className='text-danger'>{errorMessage.email}</p>
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name='password'
                          value={password}
                          onChange={handleChange}
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                        <p className='text-danger'>{errorMessage.password}</p>
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name='repeatPassword'
                          value={repeatPassword}
                          onChange={handleChange}
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <p className='text-danger'>{errorMessage.repeatPassword}</p>
                        <label className="form-label" htmlFor="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3cg"
                        />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          onClick={handleRegister}

                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
