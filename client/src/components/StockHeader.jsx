import React from 'react';
import AnimatedNumber from 'react-animated-number';
import PriceShift from './PriceShift';
import openStyles from '../styles/marketOpen/StockHeader.css';
import closedStyles from '../styles/marketClose/StockHeader.css';

const StockHeader = (props) => {
  const {
    data,
    companyName,
    displayPrice,
    marketOpen,
    hover,
  } = props;
  const styles = (marketOpen ? openStyles : closedStyles);
  if (data.length) {
    return (
      <div className={`${styles.priceDisplay} ${styles.stockHeader}`}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.price} id="price">
          <AnimatedNumber
            duration={750}
            stepPrecision={2}
            style={{
              transition: '3.0s ease-out',
              transitionProperty:
                'background-color, color, opacity',
            }}
            frameStyle={perc => (
              perc === 100 ? {} : { opacity: 1 }
            )}
            value={displayPrice}
            formatValue={n => '$'.concat(n.toString())}
          />
        </div>
        <div className={styles.priceShift}>
          <PriceShift openingPrice={data[0].price} displayPrice={displayPrice} hover={hover} />
        </div>
      </div>
    );
  }
  return '';
};

export default StockHeader;
