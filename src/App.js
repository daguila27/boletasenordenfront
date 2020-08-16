import React from 'react';
import './App.css';
import Login from './views/login/index.js';
import Router from './router.js';
import MyCompany from './views/mycompany/mycompany.js';
import Companygraph from './views/mycompany/companygraph.js';
import MenuSup from './views/menu/menusup.js';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Router/>
            </div>
        )
    };
}
export default App;