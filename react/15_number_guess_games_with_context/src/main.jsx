import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import Gameprovider from './context/GameProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Gameprovider>
                <App />
            </Gameprovider>
        </BrowserRouter>
    </React.StrictMode>,
)
