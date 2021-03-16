import React, { Component } from "react";
import {HashRouter, Link} from 'react-router-dom';
import Routes from './Routes';

import './styles/App.css';

class App extends Component {
    render() {
        
        var style = {
            //backgroundImage: 'url(' + "./images/watch-background.jfif" + ')'
			//<Link class="site-menu-item-text" to="/history">History</Link>
							//<div class="site-menu-item-devider"></div>
        };
        
        return (
        <HashRouter>
            <div className="container">
              <div className="header">
				<div className="header-content">
				<div className="header-text">Chronolog</div>
					<div className="header-logo"></div>
					
					<div className="header-extra">            
						<div class="site-menu-item">
							<Link class="site-menu-item-text" to="/">Home</Link>
							<div class="site-menu-item-devider"></div>
							<Link class="site-menu-item-text" to="/watches">Watches</Link>
							<div class="site-menu-item-devider"></div>							
							<Link class="site-menu-item-text" to="/technology">Technology</Link>
							<div class="site-menu-item-devider"></div>
							<Link class="site-menu-item-text" to="/ux">About Me</Link>
						</div>
					</div>
				</div>
              </div>
              <div className="main">
                <div className="content" style={style}>
                    <div className="list">
                        <Routes></Routes>
                    </div>                    
                </div>            
              </div>
			  <div className="sidebar-right">
                      <div></div>
              </div>
            </div>
        </HashRouter>
        );
    }
}

export default App;