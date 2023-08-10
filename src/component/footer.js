import { React } from "react";

const Footer = () => {

    return (
        <>
            <footer className="footer shadow-lg">
                <div className="container py">
                    {/* <div className="row justify-content-center align"> */}
                    <div className="d-flex justify-content-center text-center">
                        <div className="contact_us text-light">
                        <a href="/" className="navbar-brand d-inline-block fw-bold text-dark fs-3" style={{ letterSpacing: 2 }}>Blogs<span className="fs-1" style={{"color" : "#f47e00"}}>.</span></a>
                            <div className="d-flex justify-content-center py-4">
                                <i className="fa-brands text-dark fa-vimeo-v me-3" />
                                <i className="fa-brands text-dark fa-instagram mx-3" />
                                <i className="fa-brands text-dark fa-facebook-f mx-3" />
                                <i className="fa-brands text-dark fa-spotify mx-3" />
                            </div>
                            <small className="text-dark">© 2023 Writing Designs, INC. All Rights Reserved.</small>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </footer>
        </>
    )
}

export default Footer;