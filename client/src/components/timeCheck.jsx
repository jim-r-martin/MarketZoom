import moment from 'moment-timezone';

const timeCheck = () => {
  const currentTime = moment().tz('America/New_York');
  const open = moment().tz('America/New_York')
    .hour(9)
    .minute(30)
    .second(0)
    .millisecond(0);
  const close = moment().tz('America / New_York')
    .hour(16)
    .minute(0)
    .second(0)
    .millisecond(0);
  const openTradingHours = (
    (currentTime.hour() > open.hour()
      || (currentTime.hour() === open.hour() && currentTime.minutes() >= open.minutes()))
    && currentTime.hour() < close.hour()
  );
  const isWeekDay = (currentTime.day() !== 6) && (currentTime.day() !== 0);
  return { openTradingHours, isWeekDay };
};

export default timeCheck;