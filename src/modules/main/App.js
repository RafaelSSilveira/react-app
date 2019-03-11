import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home from '../home/Home';
import Navbar from '../shared/Navbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Home />
            </div>
        );
    }
}

export default App;
