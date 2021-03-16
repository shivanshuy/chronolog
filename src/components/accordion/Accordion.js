import React from 'react';
import ReactDOM from 'react-dom';
import Panel from "./Panel";

class Accordion extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeTab: 0
		};
        const {onSelectPanel} = props;
		onSelectPanel(this.state.activeTab);
		this.activateTab = this.activateTab.bind(this);
	}
	
	activateTab(index) {
        const {onSelectPanel} = this.props;
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
        onSelectPanel(this.state.activeTab);
	}
	
	render() {
		const { panels } = this.props;
		const { activeTab } = this.state;
		return (
			<div className='accordion' role='tablist'>
				{panels.map((panel, index) =>
					<Panel
						key={index}
						activeTab={activeTab}
						index={index}
						{...panel} 
						activateTab={this.activateTab.bind(null, index)}
					/>
				)}
			</div>
		);
	}
}

export default Accordion;