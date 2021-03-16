'use babel';

import React from 'react';

export default class Home extends React.Component {

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
								<img class="img-watch-responsive" src="./images/tissot-1.jfif" />
							</div>
						</div>
						<div className="cell-right-outer">
							<div className="cell-right-inner">								
							</div>                   
						</div>
					</div>
                </div>
                <div className="home-grid-row">
                    <div className="home-grid-cell-1">
						<img class="img-watch-responsive" src="./images/tissot-1.jfif" />
					</div>
                    <div className="home-grid-cell-2">
						<img class="img-watch-responsive" src="./images/hmtChinar.jfif" />
					</div>
                    <div className="home-grid-cell-3">
						<img class="img-watch-responsive" src="./images/ricohOceanDiver.jfif" />
					</div>
                </div>
                <div className="home-grid-row">
                    <div className="home-grid-cell-3"></div>
                    <div className="home-grid-cell-1"></div>
                    <div className="home-grid-cell-2"></div>
                </div>
            </div>
        );
    }
    
    componentDidMount (){
    }
}
