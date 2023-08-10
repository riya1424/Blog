import { React, useEffect, useState } from "react";
import { useParams, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleBlog = () => {

    let params = useParams();
    let [single, setSingle] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3003/blogs", {
            method: "get",
            headers: { "Content-type": "application/json" },
        }).then(async (res) => {
            let record = await res.json();
            if (record) {
                toast("viewing all records..")
                setSingle(record);
            }
            else {
                toast("not getting..")
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [setSingle])

    let [symbol, setSymbol] = useState("");
    let [data, setData] = useState(single);

    const sortBlog = (e) => {

        if(symbol === "" || symbol === "^") {
            let sorting = single.sort((a, b) => {
                return b.date.localeCompare(a.date);
            });
            setSymbol("^");
            setData(sorting);

        }

        // console.log(record);
    }



    return (
        <>
            <div className="container py">
                <div className="row">
                    {single && single.map((value, index) => {
                        if (index === params.index) {
                            return (
                                <div className="blog-list col-lg-8 py-4">
                                    <img style={{ "borderRadius": "20px" }} alt="imgx" src={value.image} width="900px" height="450px" />
                                    <div className="py-3">
                                        <h3 className="fw-semibold py-3">{value.title}</h3>
                                        <p style={{ color: '#717171' }} className="fs-5">{value.desc}</p>
                                        <p className="text-muted"><b>Published On : </b> {value.date}</p>
                                    </div>
                                </div>

                            )
                        }
                    })}
                    <div className="shadow blog-list col py-4 px-4 mx-3 my-3">
                        <h3 className="fw-bold">Recent Posts</h3>
                        <button className="b-btn my-3 px-3" style={{ "borderRadius": "30px" }} onClick={(e) => sortBlog(e)}>Sort by Date<i class="fa-solid fa-bars-staggered mx-2"></i></button>
                        {single && single.map((value, index) => {
                            return (index < 3) ? (
                                <div className="blog-list col-lg-12 py-2">
                                    <img style={{ "borderRadius": "20px" }} alt="img" src={value.image} width="300px" height="150px" />
                                    <div className="py-3">
                                        <h6 className="fw-semibold">{value.title}</h6>
                                        <p><small className="text-muted">{value.date}</small></p>
                                    </div>
                                </div>
                            ) : null
                        }
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default SingleBlog;