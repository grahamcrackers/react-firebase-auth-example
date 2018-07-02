/* eslint-disable import/no-named-as-default */

import React from "react";
//import firebase, { auth, provider } from '../utils/firebase.js'
import { hot } from "react-hot-loader";

class App extends React.Component {

    state = {
        menuOpen: false
    }

    
    toggleMenu = () => {        
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        const { menuOpen } = this.state;
        return (
            <div id="wrapper" className={(menuOpen) ? 'toggled' : ''}>

            
                <div id="sidebar">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a href="#">
                                Start Bootstrap
                            </a>
                        </li>
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Shortcuts</a>
                        </li>
                        <li>
                            <a href="#">Overview</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                

                
                <div id="content">
                    <div className="container-fluid">
                        <h1>Simple Sidebar</h1>
                        <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                        <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
                        <a href="#menu-toggle" className="btn btn-secondary" id="menu-toggle" onClick={() => this.toggleMenu()}>Toggle Menu</a>
                    </div>
                </div>
            
                <div id="overlay" className={(menuOpen) ? 'active' : ''} onClick={() => this.toggleMenu()}></div>
            </div>
        );
    }
}


export default hot(module)(App);


// const { menuOpen } = this.state;
// return (
//     <div id="wrapper" className={(menuOpen) ? 'active' : ''}>
        
//         <nav id="sidebar" className={(menuOpen) ? 'active' : ''}>

//             <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={() => this.toggleMenu()}>
//                 <span>Toggle Sidebar</span>
//             </button>

//         </nav>

        
//         <div id="content" className={(menuOpen) ? 'active' : ''}>
//             <div className="container-fluid">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <div className="container-fluid">

//                         <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={() => this.toggleMenu()}>
//                             <span>Toggle Sidebar</span>
//                         </button>
//                     </div>
//                 </nav>
//             </div>
//         </div>
        
//         {/* <div id="overlay" className={(menuOpen) ? 'active' : ''} onClick={() => this.toggleMenu()}></div> */}
//     </div>