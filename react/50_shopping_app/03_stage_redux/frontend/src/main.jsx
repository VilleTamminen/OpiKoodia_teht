import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware,combineReducers} from 'redux'; //createStore on deprecated mutta toimii silti
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import shoppingReducer from './reducers/shoppingReducer';

/*Redux thunk: https://github.com/reduxjs/redux-thunk 
It allows writing functions with logic inside that can interact 
with a Redux store's dispatch and getState methods. 
Jos tekee redux toolkitilla, ei tarvitse tehdä käsin create thunkkia.*/

//voi olla vain yksi reducer, joten yhdistetään reducerit
const rootReducer = combineReducers({
	login:loginReducer,
	shopping:shoppingReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
