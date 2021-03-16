'use babel';

import React from 'react';
import FavreLeubaDuomatic from './watches/FavreLeubaDuomatic';
import Seiko from './watches/Seiko';

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
                <Seiko></Seiko>
                <div className="blog-divider"><div className="blog-divider-bar"></div></div>
                <FavreLeubaDuomatic></FavreLeubaDuomatic>
            </div>
        );
    }

    componentDidMount (){
    }
}
