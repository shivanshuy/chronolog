import React from "react";
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import Watches from './components/Watches';
import History from './components/History';
import Technology from './components/Technology';


const Routes = () => (
	<Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/index.html" component={Home}/>
        <Route exact path="/watches" component={Watches}/>
		<Route exact path="/technology" component={Technology}/>
        <Route exact path="/history" component={History}/>
	</Switch>
);

export default Routes;
