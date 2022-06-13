import { createElement } from 'react';

const ExampleComponent = ({
  text
}) => {
  return createElement("div", null, ' ', createElement("div", {
    style: {
      background: 'green',
      color: 'white'
    }
  }, text, " haha"));
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
