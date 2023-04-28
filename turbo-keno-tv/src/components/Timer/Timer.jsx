import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { getLimits } from '../../Redux/thunks/limitsThunks';
import { getFrequency } from '../../Redux/thunks/frequencyThunks';
import { getMarkets } from '../../Redux/thunks/marketsThunks';
import { getHistory } from '../../Redux/thunks/historyThunks';
import { getTimer } from '../../Redux/thunks/timerThunks';

const Timer = ({ expiryTimestamp }) => {
  const dispatch = useDispatch();

  const time = new Date();
  const timeOnSeconds = time.setSeconds(time.getSeconds() + expiryTimestamp);

  const { seconds, minutes } = useTimer({
    expiryTimestamp: timeOnSeconds,
    onExpire: () => {
      console.log('Time Expire');
      window.location.reload();
    },
  });

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      console.log('Timer has expired! Fetching new data...');
      // dispatch(getLimits());
      dispatch(getFrequency());
      // dispatch(getMarkets());
      dispatch(getHistory());
      dispatch(getTimer());
    }
  }, [seconds, minutes, dispatch, expiryTimestamp]);
  return (
    <span>
      <span>{minutes}</span>:<span>{seconds}</span>
    </span>
  );
};

export default Timer;
