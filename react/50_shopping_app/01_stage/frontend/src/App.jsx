import useAction from "./hooks/useAction";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";
import NavBar from "./components/NavBar";
import {Routes,Route,Navigate} from 'react-router-dom';

function App() {

    const {state,addItem,removeItem,editItem} = useAction();

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ShoppingList list={state.list} removeItem={removeItem} editItem={editItem}/>}/>
                <Route path="/form" element={<ShoppingForm addItem={addItem}/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}

export default App
