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
                <div className="home-grid-row">
                    <div className="home-grid-cell-5">
                        <div className="cell-content-container">
                            <div className="cell-content-container-left">   
                            </div>
                            <div className="cell-content-container-right">                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-grid-row">
                    <div className="home-grid-cell-5">
                        <div className="cell-content-container">
                            <div className="cell-content-container-left">   
                            </div>
                            <div className="cell-content-container-right">                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-grid-row">
                    <div className="home-grid-cell-5">
                        <div className="cell-content-container">
                            <div className="cell-content-container-left">   
                            </div>
                            <div className="cell-content-container-right">                                    
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
