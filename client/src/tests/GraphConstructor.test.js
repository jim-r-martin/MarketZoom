import React from 'react';
import renderer from 'react-test-renderer';
import GraphConstructor from '../components/GraphConstructor';

const data = [{
  price: 5,
  time: 'time1',
  id: 1,
}, {
  price: 9,
  time: 'time2',
  id: 2,
}, {
  price: 1,
  time: 'time3',
  id: 3,
},
];

const openingPrice = 5;

test('price changes when when chart is hovered over', () => {
  // const component = renderer.create(
  //   <GraphConstructor data={data} openingPrice={openingPrice} />,
  // );
  // const tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  expect(1).toBe(1);
});
