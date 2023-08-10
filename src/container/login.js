import {React ,useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    let navigate = useNavigate();

    const register = () => {
        navigate("/register");
    }

    let[state,setState] = useState({
        username : "",password : "",
    })

    const getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({
            ...state,[name] : value,
        })    
    }

    useEffect(()=>{
        let data = sessionStorage.getItem("username");
        console.log(data);
        if(data == null){
            navigate("/login");
        }
    })

    const submitData = (e) => {
        e.preventDefault();
        console.log(state);
        if(validate()){
            fetch("http://localhost:3003/users?username="+state.username)
            .then(async (res)=>{
                let record = await res.json();
                if(record.length == 1){
                    console.log("login successful");
                    toast("Username exists.")
                    if(record[0].password == state.password){
                        toast.success("password matched..")
                        sessionStorage.setItem("username" , record[0].username);
                        navigate("/add_blog");
                    }
                    else{
                        toast.warning("wrong password..")
                    }
                }
                else{
                    toast.error("username doesn't exists.")
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    const validate=()=>{
        if(state.username == ""){
            toast.warning("Email Required..");
            return false;
        }
        else if(state.password == ""){
            toast.warning("Password Required..");
            return false;
        }
        else{
            return true;    
        }
    }



    return(
        <>
             <div className="container py">
                <h2 className="text-center fw-bold py-4">Login</h2>
                <div className="d-flex justify-content-center">
                    <form method="post" onSubmit={(e)=>submitData(e)}>
                        <div className="row">
                            <div className="col-md-12 form-group my-3">
                                <label className="ms-3"><b>Username</b></label>
                                <input className="form-control my-2 p-3 rounded-pill" type="text" name="username" placeholder="enter username" onChange={(e)=>getInput(e)}/>
                            </div>
                            <div className="col-md-12 form-group my-3">
                                <label className="ms-3"><b>Password</b></label>
                                <input className="form-control my-2 p-3 rounded-pill" type="password" name="password" placeholder="enter password" onChange={(e)=>getInput(e)}/>
                            </div>
                        </div>
                        <div className="text-center d-flex my-3">
                            <button className="btn btn-dark w-50 p-3 fw-semibold rounded-pill fs-6">Login</button>
                            <p className="mx-3 my-3 fs-5 text-decoration-underline fw-bold">or</p>
                            <button onClick={register} className="btn btn-dark w-50 p-3 fw-semibold rounded-pill fs-6">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        <ToastContainer/>
        </>
    )
}

export default Login;