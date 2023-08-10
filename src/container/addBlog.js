import { React } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {

    let [state, setState] = useState({
        image: "",
        title: "",
        date: "",
        desc: "",
    });

    const getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({
            ...state, [name]: value,
        })
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log(state);
        fetch("http://localhost:3003/blogs", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(state)
        }).then(async (res) => {
            let record = await res.json();
            if (record) {
                toast("Record Added Successfully.." , {
                    position: toast.POSITION.TOP_CENTER_RIGHT
                  });
                setState({
                    image: "",
                    title: "",
                    date: "",
                    desc: "",
                });
            }
        })
    }

    return (
        <>
            {/* add blog   */}
            {/* image-1 : https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg */}
            {/* image-2 : https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/loft-office-with-vintage-decor-PFD2JSL-1.jpg */}
            {/* image -3 : https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/yellow-and-gray-industrial-office-PFDQ5CR-1.jpg */}
            {/* image-4 : https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/glacier-ice-cave-of-iceland-PWYAVUU-1.jpg */}
            {/* image -5 : https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg */}
            {/* image - 6 : https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/black-woman-smiling-with-hands-in-hair-PMCFL93-1.jpg */}
            {/* image-7 : https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/flat-with-touch-of-creativity-PX387LV-2.jpg */}
            {/* image-8 : https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/father-son-1.jpg */}


            <div className="container py">
                <h2 className="text-center fw-bold py-5">Add Blog</h2>
                <div className="d-flex justify-content-center">
                    <form className="w-50" method="post" onSubmit={(e)=>submitData(e)}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label className="ms-3"><b>Blog Image</b></label>
                                <input type="text" name="image" className="form-control rounded-pill p-3 mt-2" placeholder="enter blog path" onChange={(e)=>getInput(e)} />
                            </div>
                            <div className="col-12">
                                <label className="ms-3"><b>Blog Title</b></label>
                                <input type="text" name="title" className="form-control rounded-pill p-3 mt-2" placeholder="enter blog title" onChange={(e)=>getInput(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label className="ms-3 mt-4"><b>Published Date</b></label>
                                <input type="date" name="date"  className="form-control rounded-pill p-3 mt-2" placeholder="select published date" onChange={(e)=>getInput(e)}/>
                            </div>
                            <div className="col">
                                <label className="ms-3 mt-4" htmlFor="floatingTextarea"><b>Blog Description</b></label>
                                <textarea className="form-control rounded-pill p-3 mt-2" name="desc" placeholder="enter blog description" id="floatingTextarea" rows={3} onChange={(e)=>getInput(e)}/>
                            </div>
                        </div>
                        <div className="text-center my-4">
                            <button className="btn btn-dark w-100 rounded-pill p-3 fw-semibold">Add Record + </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default AddBlog;