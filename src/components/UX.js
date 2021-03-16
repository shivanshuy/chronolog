'use babel';

import React from 'react';
import PlotMyTravel from './travel/PlotMyTravel';
import TravelPlanner from './travel/TravelPlanner';

export default class UX extends React.Component {

constructor(props) {
    super(props);
        this.state = { 
        }
        //this.createNodes = this.createNodes.bind(this);
    }

    render() {             
        return (
            <div>
                <PlotMyTravel></PlotMyTravel>
                <div className="blog-divider"><div className="blog-divider-bar"></div></div>
                <TravelPlanner></TravelPlanner>
            </div>
        );
    }

    componentDidMount (){
    }
}
