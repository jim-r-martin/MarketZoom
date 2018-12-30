/* eslint-disable react/forbid-prop-types */
import React from 'react';
import GraphConstructor from './GraphConstructor';
import StockHeader from './StockHeader';
import styles from '../styles/Graph.css';

const Graph = (props) => {
  const {
    data, companyName, displayPrice, marketOpen, handleChartHover, hover, handleChartLeave,
  } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.stockValueGraph}>
        <GraphConstructor
          data={data}
          handleChartHover={handleChartHover}
          handleChartLeave={handleChartLeave}
          marketOpen={marketOpen}
        />
      </div>
      <StockHeader
        data={data}
        companyName={companyName}
        displayPrice={displayPrice}
        hover={hover}
      />
    </div>
  );
};

export default Graph;
