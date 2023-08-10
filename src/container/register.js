import { React , useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    let [state, setState] = useState({
        username: "", email: "", password: "", cpass: "",
    })

    const getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({
            ...state, [name]: value,
        })
        // console.log(state);
    }

    const validate = () => {
        if (state.username === "") {
            toast.error("username required..")
            return false;
        }
        else if (state.email === "") {
            toast.error("email required..")
            return false;
        }
        else if (state.password === "") {
            toast.error("password required..")
            return false;
        }
        else if (state.cpass === "") {
            toast.error("confirm password..")
            return false;
        }
        else {
            return true;
        }
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log(state);
        if (validate()) {
            fetch("http://localhost:3003/users?username=" + state.username)
                .then(async (res) => {
                    let username = await res.json();
                    if (username.length == 0) {
                        fetch("http://localhost:3003/users", {
                            method: "post",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify(state)
                        }).then(async (res) => {
                            let record = await res.json();
                            if (record) {
                                toast("submitted successfully..")
                                setState({
                                        username: "", email: "", password: "", cpass: "",
                                })
                            }
                            else {
                                toast.error("not submitted..")
                            }
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                    else{
                        toast.error("Username already exists..! Try something different..!!")
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            //     
        }
    }


    return (
        <>
            {/* register  */}

            <div className="container py">
                <h2 className="text-center fw-bold py-4">Register</h2>
                <div className="d-flex justify-content-center">
                    <form method="post" onSubmit={(e)=>submitData(e)}>
                        <div className="row">
                            <div className="col-md-12 form-group my-3">
                                <label className="ms-3"><b>Username</b></label>
                                <input className="form-control my-2 p-3 rounded-pill" type="text" name="username" value={state.username} placeholder="enter username" onChange={(e)=>getInput(e)}/>
                            </div>
                            <div className="col-md-12 form-group">
                                <label className="ms-3"><b>Email</b></label>
                                <input className="form-control my-2 p-3 rounded-pill" type="email" name="email" value={state.email} placeholder="enter email" onChange={(e)=>getInput(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group my-3">
                                <label className="ms-3"><b>Password</b></label>
                                <input className="form-control my-2 p-3 rounded-pill" type="password" name="password" value={state.password} placeholder="enter password" onChange={(e)=>getInput(e)}/>
                            </div>
                            <div className="col-md-12 form-group">
                                <label className="ms-3"><b>Confirm Password</b></label>
                                <input className="form-control my-2 p-3 rounded-pill" type="password" name="cpass" value={state.cpass} placeholder="confirm password" onChange={(e)=>getInput(e)}/>
                            </div>
                        </div>
                        <div className="text-center my-3">
                            <button className="btn btn-dark w-100 p-3 fw-semibold rounded-pill fs-6">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register;