import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';

import './App.css'

import Nav from './Nav';
import Devices from './Devices';
import Dashboard from './Dashboard';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id='app-container'>
                    <Nav />
                    <div id="main">
                        <Route exact path="/"><Redirect to="/devices"/></Route>
                        <Route path="/devices" component={Devices} />
                        <Route path="/dashboard" component={Dashboard} />
                    </div>
                </div>
            </BrowserRouter>
        ); 
    }
}

export default App;
