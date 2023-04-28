import React, { memo, useEffect, useRef, useState } from 'react';
import { delayForOneNumber } from '../../helpers/constant';
import s from './DrawList.module.scss';
import DrawNum from '../DrawNum/DrawNum';

const DrawList = ({ nums }) => {
  const waitRef = useRef(null);
  const [drawNums, setDrawNums] = useState([]);

  const wait = async t => {
    return new Promise(res => {
      setTimeout(() => {
        res(true);
      }, t);
    });
  };

  const main = async (nums, setDrawNums) => {
    let count = nums.length;
    const time = new Date().getTime();
    waitRef.current = time;
    setDrawNums(() => []);
    if (count > 0) {
      while (count >= 0) {
        if (time !== waitRef.current) {
          break;
        }
        const c = count;
        if (nums[nums.length - c]) {
          setDrawNums(prevState => [...prevState, nums[nums.length - c]]);
          count--;
        }
        await wait(delayForOneNumber);
      }
    }
  };

  useEffect(() => {
    main(nums, setDrawNums);
  }, [nums]);

  return (
    <ul className={s.draw__list}>
      {drawNums.map(num => {
        return (
          <li key={num} className={s.draw__item}>
            <DrawNum show={true}>{num}</DrawNum>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(DrawList);
