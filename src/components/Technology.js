'use babel';

import React from 'react';
import ManualWatch from './tech/manualWatch.js'
import AutomaticWatch from './tech/automaticWatch.js'
import HmtCaseCodes from './tech/hmtCaseCodes.js'
import HmtMovements from './tech/hmtMovements.js'
import CenterSeconds from './tech/centerSeconds.js'
import WatchMovement from './tech/watchMovement.js'

export default class Watches extends React.Component {

constructor(props) {
    super(props);
        this.state = { 
        }
    }

    render() {             
        return (
             <div className="home-tech-grid-container-parent">
				<div className="home-tech-grid-container">
					<WatchMovement></WatchMovement>
				</div>
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container">
					<CenterSeconds></CenterSeconds>
				</div>
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container">
					<HmtMovements></HmtMovements>
				</div>
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container">
					<HmtCaseCodes></HmtCaseCodes>
				</div>
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container">
					<ManualWatch></ManualWatch>
				</div>
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container">
					<AutomaticWatch></AutomaticWatch>
				</div>
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				
			</div>
        );
    }

    componentDidMount (){
    }
}
