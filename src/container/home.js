import { React, useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    let [blog, setBlog] = useState([]);
    let [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3003/blogs", {
            method: "get",
            headers: { "Content-type": "application/json" },
        }).then(async (res) => {
            let record = await res.json();
            if (record) {
                toast("getting records..");
                setBlog(record);
            }
            else {
                toast("not getting records..")
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [setBlog]);

    const mystyle = {
        "border": "none",
        "padding": "10px 15px",
        "borderRadius": "30px",
        "width": "500px",
        "margin": "20px 0",
    };

    const singleBlog = () => {
        navigate('/single_blog');
    }

    return (
        <>
            <div>

                {/* blog list  */}

                <section className="container">
                    <div className="row py">
                        <form>
                            <i class="fa-solid fa-magnifying-glass me-1 shadow p-3 rounded-pill" style={{ "color": "#f47e00" }}></i><input className="bg-light text-dark shadow p-3" type="search" placeholder="search blogs here.." onChange={(e) => setSearch(e.target.value)} style={mystyle} />
                        </form>
                        {blog && blog.filter((value, index) => {
                            if (search === "") {
                                return value;
                            }
                            else if (value.title.includes(search)) {
                                return value;
                            }
                        }).map((value, index) => {
                            return (
                                <div className="blog-list col-lg-12 py-4">
                                    <img style={{ "borderRadius": "20px" }} src={value.image} width="900px" height="450px" alt="img" />
                                    <div className="py-3">
                                        <h3 className="fw-semibold py-3">{value.title}</h3>
                                        <p style={{ color: '#717171' }} className="fs-5">{value.desc.slice(0, 250)}....</p>
                                        <p className="text-muted"><b>Published On : </b> {value.date}</p>
                                        <div className=" my-4">
                                            <Link to={"/single_blog/" + index}>
                                            <button onClick={singleBlog} className="b-btn rounded-pill">Continue Reading<i class="fa-solid fa-angles-right mx-1"></i></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            )
                        }
                        )}
                    </div>
                </section>
            </div>
            <ToastContainer />
        </>
    )
}

export default Home;