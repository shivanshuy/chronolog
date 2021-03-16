'use babel';

import React from 'react';
import Tissot1 from './watches/tissot.js'
import HmtChinar from './watches/hmtChinar.js'
import RicohOceanDiver from './watches/ricohOceanDiver.js'

export default class Watches extends React.Component {

constructor(props) {
    super(props);
        this.state = { 
        }
        //this.createNodes = this.createNodes.bind(this);
    }

    render() {             
        return (
			<div>
				<div className="home-watch-grid-container" > 
                    <Tissot1></Tissot1>
                </div>
				<hr className="home-watch-container-separator" />
				<div className="home-watch-grid-container">
                    <HmtChinar></HmtChinar>
                </div>
				<hr className="home-watch-container-separator" />
				<div className="home-watch-grid-container">
                    <RicohOceanDiver></RicohOceanDiver>
                </div>
			</div>
        );
    }

    componentDidMount (){
    }
}
