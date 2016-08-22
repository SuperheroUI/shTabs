var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');

var ShTabs = require('./sh-tabs').default;

describe('ShTabs', function() {
    describe('type:undefined', () => {
        it('renders without problems', function() {
            let root = TestUtils.renderIntoDocument(<ShTabs />);
            expect(root != null).toBeTruthy();
        });

        it('renders given tabs', function() {
            let tabs = [
                {header: 'header1', content: 'content1'},
                {header: <div>header2</div>, content: <div>content2</div>},
            ];
            let root = TestUtils.renderIntoDocument(<ShTabs tabs={tabs} />);
            let rootNode = ReactDOM.findDOMNode(root);

            expect(rootNode.innerHTML).toContain('header1');
            expect(rootNode.innerHTML).toContain('content1');
            expect(rootNode.innerHTML).toContain('header2');
            expect(rootNode.innerHTML).toContain('content2');
        });

        it('does not error out when no onChange passed in', function() {
            let tabs = [
                {header: 'header1', content: 'content1'},
                {header: <div>header2</div>, content: <div>content2</div>},
            ];
            let root = TestUtils.renderIntoDocument(<ShTabs tabs={tabs} onChange={null} />);

            let header = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-tab-header');
            let headerItems = header.getElementsByClassName('sh-tab');

            expect(headerItems[0].classList).toContain('active');
            expect(headerItems[1].classList).not.toContain('active');

            TestUtils.Simulate.click(headerItems[1]);

            expect(headerItems[0].classList).not.toContain('active');
            expect(headerItems[1].classList).toContain('active');
        });

        it('triggers tab changes', function() {
            let tabs = [
                {header: 'header1', content: 'content1'},
                {header: <div>header2</div>, content: <div>content2</div>},
            ];
            let tabOld1 = -1;
            let tabNew1 = -1;
            let tabChanged = (tabOld, tabNew) => {
                tabOld1 = tabOld;
                tabNew1 = tabNew;
            };
            let root = TestUtils.renderIntoDocument(<ShTabs tabs={tabs} onChange={tabChanged} />);

            let header = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-tab-header');
            let headerItems = header.getElementsByClassName('sh-tab');

            expect(headerItems[0].classList).toContain('active');
            expect(headerItems[1].classList).not.toContain('active');
            expect(tabOld1).toBe(-1);
            expect(tabNew1).toBe(-1);

            TestUtils.Simulate.click(headerItems[1]);

            expect(headerItems[0].classList).not.toContain('active');
            expect(headerItems[1].classList).toContain('active');
            expect(tabOld1).toBe(0);
            expect(tabNew1).toBe(1);
        });

        it('does not trigger when clicking same tab', function() {
            let tabs = [
                {header: 'header1', content: 'content1'},
                {header: <div>header2</div>, content: <div>content2</div>},
            ];
            let tabOld1 = -1;
            let tabNew1 = -1;
            let tabChanged = (tabOld, tabNew) => {
                tabOld1 = tabOld;
                tabNew1 = tabNew;
            };
            let root = TestUtils.renderIntoDocument(<ShTabs tabs={tabs} onChange={tabChanged} />);

            let header = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-tab-header');
            let headerItems = header.getElementsByClassName('sh-tab');

            expect(headerItems[0].classList).toContain('active');
            expect(headerItems[1].classList).not.toContain('active');
            expect(tabOld1).toBe(-1);
            expect(tabNew1).toBe(-1);

            TestUtils.Simulate.click(headerItems[0]);

            expect(headerItems[0].classList).toContain('active');
            expect(headerItems[1].classList).not.toContain('active');
            expect(tabOld1).toBe(-1);
            expect(tabNew1).toBe(-1);
        });
    });

    describe('type:standard', () => {
        it('renders without problems', function() {
            let root = TestUtils.renderIntoDocument(<ShTabs type="standard" />);
            expect(root != null).toBeTruthy();
        });

        it('renders given tabs', function() {
            let tabs = [
                {header: 'header1', content: 'content1'},
                {header: <div>header2</div>, content: <div>content2</div>},
            ];
            let root = TestUtils.renderIntoDocument(<ShTabs type="standard" tabs={tabs} />);
            let rootNode = ReactDOM.findDOMNode(root);

            expect(rootNode.innerHTML).toContain('header1');
            expect(rootNode.innerHTML).toContain('content1');
            expect(rootNode.innerHTML).toContain('header2');
            expect(rootNode.innerHTML).toContain('content2');
        });

        it('triggers tab changes', function() {
            let tabs = [
                {header: 'header1', content: 'content1'},
                {header: <div>header2</div>, content: <div>content2</div>},
            ];
            let tabOld1 = -1;
            let tabNew1 = -1;
            let tabChanged = (tabOld, tabNew) => {
                tabOld1 = tabOld;
                tabNew1 = tabNew;
            };
            let root = TestUtils.renderIntoDocument(<ShTabs type="standard" tabs={tabs} onChange={tabChanged} />);

            let header = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-tab-header');
            let headerItems = header.getElementsByClassName('sh-tab');

            expect(headerItems[0].classList).toContain('active');
            expect(headerItems[1].classList).not.toContain('active');
            expect(tabOld1).toBe(-1);
            expect(tabNew1).toBe(-1);

            TestUtils.Simulate.click(headerItems[1]);

            expect(headerItems[0].classList).not.toContain('active');
            expect(headerItems[1].classList).toContain('active');
            expect(tabOld1).toBe(0);
            expect(tabNew1).toBe(1);
        });
    });

    describe('type:card', () => {
        it('renders without problems', function() {
            let root = TestUtils.renderIntoDocument(<ShTabs type="card" />);
            expect(root != null).toBeTruthy();
        });

        it('renders given tabs', function() {
            let tabs = [
                {header: 'header1', content: 'content1'},
                {header: <div>header2</div>, content: <div>content2</div>},
            ];
            let root = TestUtils.renderIntoDocument(<ShTabs type="card" tabs={tabs} />);
            let rootNode = ReactDOM.findDOMNode(root);

            expect(rootNode.innerHTML).toContain('header1');
            expect(rootNode.innerHTML).toContain('content1');
            expect(rootNode.innerHTML).toContain('header2');
            expect(rootNode.innerHTML).toContain('content2');
        });

        it('triggers tab changes', function() {
            let tabs = [
                {header: 'header1', content: 'content1'},
                {header: <div>header2</div>, content: <div>content2</div>},
            ];
            let tabOld1 = -1;
            let tabNew1 = -1;
            let tabChanged = (tabOld, tabNew) => {
                tabOld1 = tabOld;
                tabNew1 = tabNew;
            };
            let root = TestUtils.renderIntoDocument(<ShTabs type="card" tabs={tabs} onChange={tabChanged} />);

            let tabItems = ReactDOM.findDOMNode(root).getElementsByClassName('sh-tab');

            expect(tabItems[0].classList).toContain('position-0');
            expect(tabItems[1].classList).toContain('position-1');
            expect(tabOld1).toBe(-1);
            expect(tabNew1).toBe(-1);

            TestUtils.Simulate.click(tabItems[1].getElementsByClassName('sh-tab-header')[0]);

            expect(tabItems[0].classList).toContain('position-1');
            expect(tabItems[1].classList).toContain('position-0');
            expect(tabOld1).toBe(0);
            expect(tabNew1).toBe(1);
        });
    });
});
