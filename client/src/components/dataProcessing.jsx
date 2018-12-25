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

export { nullRemoval, parsedTime };
