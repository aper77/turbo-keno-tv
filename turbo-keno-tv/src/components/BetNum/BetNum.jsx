import React from 'react';
import s from './BetNum.module.scss';
import classNames from 'classnames';

const BetNum = ({ children, active, hot, cold }) => {
  return (
    <li
      className={classNames(s.betNum, {
        [s.active]: active,
        [s.hot]: hot,
        [s.cold]: cold,
      })}>
      {children}
    </li>
  );
};

export default BetNum;
