import React from 'react';
import Routes from './routes';

//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './redux/reducers/mainReducer';
const store = createStore(Reducers);

import './configs/statusbar';

const App = () => 
(
    <Provider store={store}>
        <Routes />
    </Provider>
)

export default App