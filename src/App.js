import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
     const dispatch=useDispatch();
     useEffect(() => {
          const data=[];
       const fetchData = async() =>{
          await fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then((json) =>{
               json.map((contact) => {
                    data.push({
                        id: contact.id,
                        name: contact.name,
                        number: contact.phone,
                        email: contact.email
                    });
                })    
          })
          dispatch({type:"FETCH_CONTACT",payload:data});
       }
      
       fetchData();
     }, [])
     
     return (
          <div className="App">
            <ToastContainer/>
               <Navbar />
               <Routes>
                    <Route exact path="/" element={<Home />} />
               </Routes>
               <Routes>
                    <Route path="/add" element={<AddContact />} />
               </Routes>
               <Routes>
                    <Route path="/edit/contact/:id" element={<EditContact />} />
               </Routes>
          </div>
     );
}

export default App;
