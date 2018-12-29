import React from 'react';
import {
  LineChart, Line, ResponsiveContainer, YAxis, XAxis, ReferenceLine, Tooltip,
} from 'recharts';
import CustomToolTip from './CustomToolTip';
import { nullRemoval, parsedTime, priceFormatting } from './dataProcessing';
import styles from '../styles/GraphConstructor.css';

const GraphConstructor = (props) => {
  let {
    data, handleChartHover, handleChartLeave, marketOpen,
  } = props;
  const nonNullData = nullRemoval(data);
  const updatedTimedata = parsedTime(nonNullData);
  const displayData = priceFormatting(updatedTimedata);
  const openingPrice = displayData[0].close;
  const currentMarketPrice = displayData[displayData.length - 1].close;
  const priceLineColor = (currentMarketPrice >= openingPrice) ? '#30CD9A' : '#F1563A';
  const refLineColor = (marketOpen) ? 'black' : 'whitesmoke';
  return (
    <ResponsiveContainer className={styles.chart} width="100%" height="100%">
      <LineChart
        onMouseMove={e => handleChartHover(e)}
        onMouseLeave={() => handleChartLeave()}
        className="chart"
      >
        <YAxis type="number" domain={['dataMin', 'dataMax']} hide />
        <XAxis type="number" dataKey="time" domain={[570, 960]} hide />
        <Tooltip content={<CustomToolTip />} />
        <ReferenceLine y={openingPrice} stroke={refLineColor} strokeDasharray="1 8" />
        <Line
          type="monotone"
          dataKey="close"
          data={displayData}
          strokeWidth={3}
          stroke={priceLineColor}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphConstructor;
