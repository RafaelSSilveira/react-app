import React, { Component } from 'react'
import logo from '../../assets/img/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <span className="navbar-brand mb-0 h1">
                    <img src={logo} className="App-logo" alt="logo" />
                    TheBurguer
                </span>
            </nav>
        )
    }
}

