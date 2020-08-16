import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './views/login/index.js';
import CompanyView from './views/mycompany/index.js';
import CuentaView from './views/myaccount/index.js';

import ConfigView from './views/config/index.js';
import ExpensiveView from './views/newexpensive/index.js';


const Nav = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" exact render={() => <Login/>} />
                <Route path="/mycompany/:iduser" render={(props) => <CompanyView {...props} />} />
                <Route path="/myaccount" exact component={CuentaView}/>
                <Route path="/config" exact component={ConfigView}/>
                <Route path="/newexpensive" exact component={ExpensiveView}/>
                <Route render={() => <Redirect to="/login" />} />
            </Switch>
        </Router>
    )
}

export default Nav
