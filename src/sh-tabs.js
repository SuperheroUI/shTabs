import React from 'react';
import * as _ from 'lodash';
import sh from 'sh-core';

require('./sh-tabs.scss');

class ShTabs extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTab: 0
        };

        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(index) {
        return () => {
            this.setState({
                currentTab: index
            });
        };
    }

    generateCard(tabs) {
        let tabList = tabs.map((tabDetails, index) => {
            let position = index - this.state.currentTab;
            if (position < 0) {
                position = tabs.length + position;
            }

            let classNames = {
                shTab: true,
                position: position.toString()
            };

            return (
                <div key={index} className={sh.getClassNames(classNames)}>
                    <div className="sh-tab-header" onClick={this.selectTab(index)}>{tabDetails.header}</div>
                    <div className="sh-tab-content">{tabDetails.content}</div>
                </div>
            )
        });

        return (
            <div className="sh-tabs-wrapper type-card">{tabList}</div>
        );
    }

    generateStandard(tabs) {
        let tabHeaderItems = tabs.map((tabDetails, index) => {
            let classNames = {
                shTab: true,
                active: this.state.currentTab === index
            };

            return (
                <div key={index} className={sh.getClassNames(classNames)} onClick={this.selectTab(index)}>{tabDetails.header}</div>
            )
        });

        let tabHeader = (
            <div className="sh-tab-header">{tabHeaderItems}</div>
        );

        let tabContentItems = tabs.map((tabDetails, index) => {
            let classNames = {
                shTab: true,
                active: this.state.currentTab === index
            };

            return (
                <div key={index} className={sh.getClassNames(classNames)} onClick={this.selectTab(index)}>{tabDetails.content}</div>
            )
        });

        let tabContent = (
            <div className="sh-tab-content">{tabContentItems}</div>
        );

        return (
            <div className="sh-tabs-wrapper type-standard">
                {tabHeader}
                {tabContent}
            </div>
        );
    }

    render() {
        let {
            tabs,
            type,
            onChange,
            ...other
        } = this.props;

        let tabElements; {
            if (type === 'card') {
                tabElements = this.generateCard(tabs);
            } else {
                tabElements = this.generateStandard(tabs);
            }
        }

        return (
            <div className="sh-tabs" {...other}>{tabElements}</div>
        );
    }
}

ShTabs.propTypes = {
    tabs: React.PropTypes.array.isRequired,
    type: React.PropTypes.oneOf(['standard', 'card']),
    onChange: React.PropTypes.func
};

ShTabs.defaultProps = {
    tabs: [],
    type: 'standard',
    onChange: _.noop
};

export default ShTabs;
