import React, { useEffect, useState } from 'react';
import s from './Draw.module.scss';
import Loader from '../Loader/Loader';
import BetTemp from '../BetTemp/BetTemp';
import { useSelector } from 'react-redux';
import DrawList from '../DrawList/DrawList';
import Timer from '../Timer/Timer';

const Draw = () => {
  const { coldNums, hotNums } = useSelector(state => state.frequency);
  const { currentDrawId, nextDrawId, drawNums } = useSelector(
    state => state.history,
  );
  const expiryTimestamp = useSelector(state => state.timer.timer);
  const [timestep, setTimestep] = useState(expiryTimestamp);

  useEffect(() => {
    setTimestep(expiryTimestamp);
  }, [expiryTimestamp]);

  return (
    <div className={s.draw}>
      <div className={s.draw__header}>
        <div className={s.draw__next}>
          NEXT DRAW: {nextDrawId} in{' '}
          {timestep && <Timer expiryTimestamp={timestep} />}
        </div>
        <div className={s.draw__current}>
          <div className={s.draw__currentName}>CURRENT DRAW PROCESS</div>
          <div className={s.draw__currentID}>{currentDrawId}</div>
          <div className={s.draw__load}>
            <Loader
              expiryTimestamp={expiryTimestamp}
              initPercentage={(expiryTimestamp / 180) * 100}
            />
          </div>
        </div>
      </div>
      <div className={s.draw__body}>
        <DrawList nums={drawNums} />
      </div>
      <div className={s.draw__footer}>
        <div className={s.draw__temp}>
          <BetTemp nums={hotNums} hot />
        </div>
        <div className={s.draw__temp}>
          <BetTemp nums={coldNums} />
        </div>
        <></>
      </div>
    </div>
  );
};

export default Draw;
