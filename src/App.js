
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserRouter from "./user/routes/UserRouter";
import AdminRouter from "./admin/routes/AdminRouter";
import Login from "./auth/pages/Login";
import Signup from "./auth/pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserProtected from "./user/routes/Userprotected";
import AdminProtected from "./admin/routes/Adminprotected";
import Home from "./user/pages/Home";
import ProductDetail from "./user/pages/ProductDetail"
import Sidebar from "./admin/pages/Sidebar"
import Notfound from "./components/Notfound";


// import { AuthProvider } from "./contexts/AuthContext";
// import { CartProvider } from "./contexts/CartContext";


function App() {
  // const location = useLocation();
  // const isAdmin = AdminRouter.some(route => location.pathname.startsWith(route.path));
  return (
   <div className="flex flex-col min-h-screen">
     {/* {isAdmin ? <Sidebar/> : <Navbar/>} */}
     <Navbar></Navbar>
      <div className="flex-grow container mx-auto p-4">
      <Routes>
            <Route path="/" element = { <Home/> } />
            <Route path="/login" element = { <Login/> } />
            <Route path="/Signup" element = { <Signup/> } />
            <Route path="/productdetail/:id" element = { <ProductDetail/> } />
            <Route element={<UserProtected/>}>
                {UserRouter.map(({path,element},index)=>(
                  <Route key={index} path={path} element={element}/>
                ))}
              </Route>
              <Route element={<AdminProtected/>}>
                {AdminRouter.map(({path,element},index)=>(
                  <Route key={index} path={path} element={element}/>
                ))}
              </Route>
              <Route path='*' element={<Notfound/>} />
          </Routes>
        </div>
       <Footer/>
    </div> 
  )
}

export default App;
