import React from 'react';

const PriceShift = (props) => {
  const {
    openingPrice,
    displayPrice,
    hover,
  } = props;
  let priceShift = Math.round(100 * (displayPrice - openingPrice)) / 100;
  let percentShift = Math.round((priceShift / openingPrice * 100) * 100) / 100;
  const priceShiftExtInfo = (hover) ? '' : 'Today';
  if (priceShift >= 0) {
    return (
      <span>
        {'+$'.concat(priceShift, ' +', percentShift, '% ', priceShiftExtInfo)}
      </span>
    );
  }
  priceShift = Math.abs(priceShift);
  percentShift = Math.abs(percentShift);
  return (
    <span>
      {'-$'.concat(priceShift, ' -(', percentShift, '%) ', priceShiftExtInfo)}
    </span>
  );
};

export default PriceShift;
