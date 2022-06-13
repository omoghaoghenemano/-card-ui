var React = require('react');

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", null, ' ', React.createElement("div", {
    style: {
      background: 'green',
      color: 'white'
    }
  }, text, " haha"));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
