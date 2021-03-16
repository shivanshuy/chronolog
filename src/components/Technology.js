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
				<div className="home-tech-grid-container" dangerouslySetInnerHTML={ {__html: WatchMovement} } />
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container" dangerouslySetInnerHTML={ {__html: CenterSeconds} } />
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container" dangerouslySetInnerHTML={ {__html: HmtMovements} } />
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container" dangerouslySetInnerHTML={ {__html: HmtCaseCodes} } />
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container" dangerouslySetInnerHTML={ {__html: ManualWatch} } />
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				<div className="home-tech-grid-container" dangerouslySetInnerHTML={ {__html: AutomaticWatch} } />
				<div className="home-tech-container-separator-parent"><div className="home-tech-container-separator"></div></div>
				
			</div>
        );
    }

    componentDidMount (){
    }
}
