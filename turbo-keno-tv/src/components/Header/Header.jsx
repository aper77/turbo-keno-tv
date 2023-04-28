import React from 'react';
import s from './Header.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const limitsAndConfigs = useSelector(state => state.limits);

  return (
    <header className={s.header}>
      <div className={s.headerJackpot}>
        <div className={s.headerJackpot__name}>Jackpot</div>
        <div className={s.headerJackpot__sum}>
          {/*520.000.000*/}
          {/*<div className={s.headerJackpot__coin}>Coming Soon</div>*/}
          <div className={s.headerJackpot__currency}>tzs</div>
        </div>
      </div>
      {/* <div className={s.horizontal_line} /> */}
      <div className={s.headerWinner}>
        {/* Last Winner:<span>540 000 {limitsAndConfigs.currency}</span> */}
        <span>Coming Soon</span>
      </div>
      {/* <div className={s.horizontal_line} /> */}
      <div className={s.headerLimits}>
        <div className={s.headerLimits__details}>
          <div className={s.headerLimitsInfo}>
            Bet Limits:&nbsp;
            <span>
              Min-{limitsAndConfigs.minBet} Max-{limitsAndConfigs.maxBet}
            </span>
          </div>
          <div className={s.headerLimitsInfo}>
            Max Win: <span>{limitsAndConfigs.maxWin}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
