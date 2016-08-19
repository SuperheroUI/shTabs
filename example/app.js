import React from 'react'
import ReactDOM from 'react-dom';

import ShTabs from '../bin/sh-tabs';

require('../node_modules/sh-core/bin/main.css');
require('./app.scss');

class App extends React.Component {
    constructor() {
        super();
        this.tabs = [
            {header: <div className="taco">Tab 1</div>, content: <div style={{background: 'blue'}}>tab 1 content</div>},
            {header: 'Tab 2', content: <div style={{background: 'red'}}>tab 2 content</div>},
            {header: 'Tab 3', content: <div style={{background: 'green'}}>tab 3 content</div>},
        ]
    }

    update(oldIndex, newIndex) {
        console.log('Changed: ', oldIndex, newIndex);
    }

    render() {
        return (
            <div>
                <div style={{height: '300px', width: '500px'}}>
                    <ShTabs tabs={this.tabs} />
                </div>
                <div style={{height: '300px', width: '500px'}}>
                    <ShTabs tabs={this.tabs} type="card" onChange={this.update} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
