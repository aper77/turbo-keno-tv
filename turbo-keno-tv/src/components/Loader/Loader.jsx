import React, { useLayoutEffect, useState } from 'react';
import s from './Loader.module.scss';

const Loader = ({ initPercentage }) => {
  const [percentage, setPercentage] = useState(0);

  useLayoutEffect(() => {
    setPercentage(() => initPercentage);
    const myInterval = setInterval(() => setPercentage(prev => prev - 1), 1800);
    return () => clearInterval(myInterval);
  }, [initPercentage]);
  return (
    <div className={s.loader}>
      <div style={{ width: percentage + `%` }} className={s.loading} />
    </div>
  );
};

export default Loader;
