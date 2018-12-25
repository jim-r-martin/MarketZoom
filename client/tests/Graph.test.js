import React from 'react';
import { shallow } from './enzyme';
import Graph from '../src/components/Graph';

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
}];

const companyName = 'Asso';
const displayPrice = 9;
const marketOpen = true;
const handleChartHover = () => {};
const hover = false;
const handleChartLeave = () => {};

test('graph should render all components correctly', () => {
  const wrapper = shallow(
    <Graph
      data={data}
      companyName={companyName}
      displayPrice={displayPrice}
      marketOpen={marketOpen}
      hover={hover}
      handleChartHover={handleChartHover}
      handleChartLeave={handleChartLeave}
    />,
  );
  expect(wrapper.find('.wrapper')).toHaveLength(1);
  expect(wrapper.find('.stockValueGraph')).toHaveLength(1);
  expect(wrapper.find('GraphConstructor')).toHaveLength(1);
  expect(wrapper.find('StockHeader')).toHaveLength(1);
});
