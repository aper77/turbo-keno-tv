import React from 'react';
import s from './History.module.scss';
import { useSelector } from 'react-redux';

const History = () => {
  const { history } = useSelector(state => state.history);
  return (
    <div className={s.history}>
      <div className={s.history__title}>Draw History</div>
      <div className={s.history__inner}>
        <ul className={s.history__list}>
          {history.map(item => {
            return (
              <li key={item.id} className={s.history__item}>
                <div className={s.history__id}>{item.id}</div>
                <div className={s.historyDraw}>
                  <ul className={s.historyDraw__list}>
                    {item.r.split(',').map(num => {
                      return (
                        <li key={num} className={s.historyDraw__item}>
                          {num}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default History;
