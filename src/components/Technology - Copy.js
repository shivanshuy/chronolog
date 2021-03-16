'use babel';

import React from 'react';
import seiko from './watches/seiko.js'

export default class Watches extends React.Component {

constructor(props) {
    super(props);
        this.state = { 
        }
        //this.createNodes = this.createNodes.bind(this);
    }

    render() {             
        return (
             <div className="home-grid">
                <div className="home-grid-trending-row ">
                    <div className="trending-outer-container">
						<div className="cell-left-outer">
							<div className="cell-left-inner">								
							</div>
						</div>
						<div className="cell-right-outer">
							<div className="cell-right-inner">
								<img class="img-watch-responsive" src="/images/vintage-Tissot-logo-chart.jpg" />							
							</div>                   
						</div>
					</div>
                </div>
                <div className="home-grid-trending-row ">
                    <div className="trending-outer-container">
						<div className="cell-left-outer">
							<div className="cell-tech-left-inner">
								<div>1. Turning the crown winds the mainspring, causing it to store energy.</div>
								<div>2. The gear train transfers the energy to the escapement.</div>
								<div>3. The escapement meters out the energy into regulated parts.</div>
								<div>4. The balance wheel uses this regulated energy to beat back and forth at a constant rate.</div>
								<div>5. Every certain number of beats, the dial train transfers the energy to the hands of the watch.</div>
								<div>6. The hands advance.</div>
							</div>
						</div>
						<div className="cell-right-outer">
							<div className="cell-right-inner">	
								<img class="img-watch-responsive" src="/images/manual-watch.jpg" />							
							</div>                   
						</div>
					</div>
                </div>
            </div>
        );
    }

    componentDidMount (){
    }
}
