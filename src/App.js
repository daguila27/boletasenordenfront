import React from 'react';
import './App.css';
import Router from './router.js';


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
