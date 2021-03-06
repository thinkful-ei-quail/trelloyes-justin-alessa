import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  const arr = [{id:5, title:'Test', content:'Words'}];
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List header="list" cards={arr} />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const arr = [{id:5, title:'Test', content:'Words'}];
  const tree = renderer
    .create(<List header="list" cards={arr}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });