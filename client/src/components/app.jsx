import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Orders from './Orders';
import Dashboard from './Dashboard';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id='app-container'>
                    <Nav />
                    <h1>Welcome</h1>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </BrowserRouter>
        ); 
    }
}

export default App;
