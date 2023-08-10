import Header from "./component/header";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Footer from "./component/footer";
import Home from "./container/home";
import AddBlog from "./container/addBlog";
import SingleBlog from "./container/singleBlog";
import Register from "./container/register";
import Login from "./container/login";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add_blog" element={<AddBlog/>} />
        <Route path="/single_blog/:index" element={<SingleBlog/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
