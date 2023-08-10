import { React } from "react";
import {NavLink , useNavigate} from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();

    const login = () => {
        navigate("/login")
    }
    return (
        <>
            <header className="navbar navbar-expand-lg py-2 position-fixed shadow-sm">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="/" className="navbar-brand d-inline-block fw-bold text-dark fs-3" style={{ letterSpacing: 2 }}>Blogs<span className="fs-1" style={{"color" : "#f47e00"}}>.</span></a>
                    </div>
                    <div className="order-lg-1 d-flex">
                        <button className="rounded-2 navbar-toggler me-2 py-2" data-bs-toggle="collapse" data-bs-target="#menu">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                    </div>
                    <nav id="menu" className="navbar-collapse justify-content-end align-items-center">
                        <ul className="navbar-nav">
                            <li><NavLink to="/" className="nav-link me-4 fw-bold">HOME</NavLink></li>
                            <li><a href="/" className="nav-link me-4 fw-bold">EXAMPLES</a></li>
                            <li><a href="/" className="nav-link me-4 fw-bold">POSTS</a></li>
                            <li><a href="/" className="nav-link me-4 fw-bold">SHOP</a></li>
                            <li><a href="/" className="nav-link me-4 fw-bold">PAGES</a></li>
                            <button onClick={login} className="login"><i className="fa-solid fa-user"/></button>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;