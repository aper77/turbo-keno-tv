import React, { useEffect } from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import { useDispatch } from 'react-redux';
import { getFrequency } from './Redux/thunks/frequencyThunks';
import { getMarkets } from './Redux/thunks/marketsThunks';
import { getHistory } from './Redux/thunks/historyThunks';
import { getLimits } from './Redux/thunks/limitsThunks';
import { getTimer } from './Redux/thunks/timerThunks';

// ActiveNumbers

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLimits());
    dispatch(getFrequency());
    dispatch(getMarkets());
    dispatch(getHistory());
    dispatch(getTimer());
  }, []);

  return (
    <div className={s.app}>
      <Header />
      <Game />
    </div>
  );
};

export default App;
