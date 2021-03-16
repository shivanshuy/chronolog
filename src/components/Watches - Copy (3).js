'use babel';

import React from 'react';
import Tissot1 from './watches/tissot.js'

export default class Watches extends React.Component {

constructor(props) {
    super(props);
        this.state = { 
        }
        //this.createNodes = this.createNodes.bind(this);
    }

    render() {             
        return (
             <div className="home-watch-grid-container" dangerouslySetInnerHTML={ {__html: Tissot1} } />
        );
    }

    componentDidMount (){
    }
}
