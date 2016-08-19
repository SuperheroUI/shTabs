var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');

var ShTabs = require('./sh-tabs').default;

describe('root', function() {
    it('renders without problems', function() {
        var root = TestUtils.renderIntoDocument(<ShTabs />);
        expect(root != null).toBeTruthy();
    });
});
