import React from 'react';

const PriceShift = (props) => {
  const {
    openingPrice,
    displayPrice,
    hover,
  } = props;
  const priceShift = displayPrice - openingPrice;
  const percentShift = priceShift / openingPrice;

  const priceShiftDispOpts = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  const percentShiftDispOpts = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const priceShiftString = Intl.NumberFormat('en-US', priceShiftDispOpts).format(priceShift);
  const percentShiftString = Intl.NumberFormat('en-US', percentShiftDispOpts).format(percentShift);
  const priceShiftExtInfo = (hover) ? '' : 'Close';

  return (
    <span>
      {`${priceShiftString} ${percentShiftString} ${priceShiftExtInfo}`}
    </span>
  )
};

export default PriceShift;
