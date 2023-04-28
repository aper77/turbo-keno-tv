import React, { useState, useEffect } from 'react';
import s from './BetBoard.module.scss';
import BetNum from '../BetNum/BetNum';
import { useSelector } from 'react-redux';

const BetBoard = () => {
  const { coldNums, hotNums } = useSelector(state => state.frequency);
  const { drawNums } = useSelector(state => state.history);

  return (
    <div className={s.betBoard}>
      <ul className={s.betBoard__list}>
        {Array.from(Array(80), (_, i) => {
          const number = i + 1;
          return (
            <BetNum
              active={false}
              cold={coldNums.includes(String(number))}
              hot={hotNums.includes(String(number))}
              key={i}>
              {number}
            </BetNum>
          );
        })}
      </ul>
    </div>
  );
};

export default BetBoard;
