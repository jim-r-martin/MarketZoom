/* eslint-disable react/forbid-prop-types */
import React from 'react';
import openStyles from '../styles/marketOpen/GraphOpen.css';
import closeStyles from '../styles/marketClose/GraphClose.css';
import GraphConstructor from './GraphConstructor';
import StockHeader from './StockHeader';

const Graph = (props) => {
  const {
    data, symbol, displayPrice, marketOpen, handleChartHover, hover, handleChartLeave,
  } = props;
  const styles = (marketOpen ? openStyles : closeStyles);
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
        symbol={symbol}
        displayPrice={displayPrice}
        marketOpen={marketOpen}
        hover={hover}
      />
    </div>
  );
};

export default Graph;
