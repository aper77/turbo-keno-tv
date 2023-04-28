import React from 'react';
import s from './DrawNum.module.scss';
import classNames from 'classnames';

const DrawNum = ({ children, show }) => {
  return (
    <div className={classNames(s.drawNum, { [s.show]: show })}>{children}</div>
  );
};

export default DrawNum;
