import ShoppingList from "./components/ShoppingList";
import ShoppingForm from "./components/ShoppingForm";
import Navbar from "./components/Navbar";
import { Routes,Route,Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getList } from "./store/shoppingSlice";
import { useDispatch } from "react-redux";

//backend kopioitu 50_shopping_app/01_stage
//samalla otettu components-kansio 

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getList());
    },[])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<ShoppingList/>}/>
                <Route path="/form" element={<ShoppingForm/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}

export default App
