import React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { act_login } from '../redux/action'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    let error = ""
    const handleLogin = (e) => {
        e.preventDefault()
        if (email.trim() === "" || password.trim() === "") {
            setErrorMessage("email và password không được để trống")
        } else {
            dispatch(act_login(email, password))
        }
    }
    let userLogin = useSelector(state => state.userlogin)
    console.log("userLogin",userLogin);
    
    // localStorage.setItem("userlogin",JSON.stringify(userLogin))
    // if (userLogin.length === 0) {
    //     setErrorMessage("Tài khoản không chính xác!")
    // }
    // else if (userLogin[0].id === 1) {
    //     navigate("/checkout", { state: true })
    // } else {
    //     navigate("/")
    // }
    if (userLogin.length === 0) {
       error = "Tài khoản không chính xác!"
    } else if (userLogin[0].id === 1) {
        navigate("/checkout", { state: true })
    } else {
        navigate("/")
    }
console.log("error",error);

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid"
                            alt="Phone image"
                        />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="form1Example13"
                                    className="form-control form-control-lg"
                                />

                                <label className="form-label" htmlFor="form1Example13">
                                    Email address
                                </label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    id="form1Example23"
                                    className="form-control form-control-lg"
                                />
                                <label className="form-label" htmlFor="form1Example23">
                                    Password
                                </label>
                                <p className='text-danger'>{errorMessage}</p>
                                <p className='text-danger'>{error}</p>
                            </div>
                            <div className="d-flex justify-content-around align-items-center mb-4">
                                {/* Checkbox */}
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="form1Example3"
                                        defaultChecked=""
                                    />
                                    <label className="form-check-label" htmlFor="form1Example3">
                                        {" "}
                                        Remember me{" "}
                                    </label>
                                </div>
                                <NavLink to={"/register"}>Register here</NavLink>
                            </div>
                            {/* Submit button */}
                            <button onClick={handleLogin} type="submit" className="btn btn-primary btn-lg btn-block">
                                Sign in
                            </button>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>
                            <a
                                className="btn btn-primary btn-lg btn-block"
                                style={{ backgroundColor: "#3b5998" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-facebook-f me-2" />
                                Continue with Facebook
                            </a>
                            <a
                                className="btn btn-primary btn-lg btn-block"
                                style={{ backgroundColor: "#55acee" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-twitter me-2" />
                                Continue with Twitter
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
