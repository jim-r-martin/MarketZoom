const nullRemoval = (data) => {
  return data.filter((payload) => payload.close);
};

const parsedTime = (data) => {
  return data.map((payload) => {
    const { minute } = payload;
    const timeArr = minute.split(':');
    const hour = parseInt(timeArr[0]);
    const minutes = parseInt(timeArr[1]);
    const minuteNum = (hour * 60) + minutes;
    payload.time = parseInt(minuteNum);
    return payload;
  });
};

const centsParse = (price) => {
  let priceString = price.toString();
  if (priceString.includes('.')) {
    if (priceString.split('.').length > 1) {
      const cents = priceString.split('.')[1].slice(0, 2);
      const dollars = priceString.split('.')[0];
      priceString = dollars.concat('.',cents);
    } else {
      const cents = priceString.split('.')[0].slice(0,2);
      priceString = '.'.concat(cents);
    }
  }
  return Number(priceString);
};

export { nullRemoval, parsedTime, centsParse };
