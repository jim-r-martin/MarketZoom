import { nullRemoval, parsedTime, parseCents, centsParse } from '../src/components/dataProcessing';
import data from './mock/mockData.js';

test('removes all null prices from array and all prices are numbers', () => {
  const mockData = data.slice();
  const nonNullData = nullRemoval(mockData);
  nonNullData.forEach((payload) => {
    const price = payload.close;
      expect(price).toBeDefined();
      expect(isNaN(price)).toBe(false);
  });
});

test('parsedTime effectively turns each time in to a number representing the time', () => {
  const mockData = data.slice();
  const nonNullData = nullRemoval(mockData);
  const parsedTimeData = parsedTime(nonNullData);
  parsedTimeData.forEach((payload) => {
    const { time } = payload;
    expect(isNaN(time)).toBe(false);
  });
});

test('parsedTime correctly converts time in to correct number of minutes', () => {
  const time = [{minute: '09:30'}, {minute: '10:15'}, {minute: '16:00'}];
  const parsedTimeData = parsedTime(time);
  expect(parsedTimeData[0].time).toEqual(570);
  expect(parsedTimeData[1].time).toEqual(615);
  expect(parsedTimeData[2].time).toEqual(960);
});

test('parseCents correctly ensures that stock prices only have up to two decimals worth of cents', () => {
  expect(centsParse(0.01)).toEqual(0.01);
  expect(centsParse(0.1005)).toEqual(0.10);
  expect(centsParse(1400)).toEqual(1400);
  expect(centsParse(-45.65)).toEqual(-45.65);
  expect(centsParse(-0.5555)).toEqual(-0.55);
  expect(centsParse(-456)).toEqual(-456);
});
