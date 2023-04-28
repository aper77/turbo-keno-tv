import React from 'react';
import s from './OtherTypes.module.scss';
import { useSelector } from 'react-redux';

const OtherTypes = () => {
  const { markets } = useSelector(state => state.markets);
  return (
    <div className={s.otherTypes}>
      <div className={s.otherTypes__title}>other Types</div>
      {markets.map(market => {
        return (
          <div key={market.market_id} className={s.otherType}>
            <div className={s.otherType__name}>{market.market_title}</div>
            <div className={s.otherType__markets}>
              {market.prices.map(price => {
                return (
                  <div key={price.price_id} className={s.otherType__market}>
                    <span>{price.price_name}</span>
                    <span>{price.rate}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OtherTypes;
