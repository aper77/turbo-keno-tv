import React from 'react';
import s from './Coefficient.module.scss';

const Coefficient = () => {
  return (
    <div className={s.coefficient}>
      <table className={s.coefficient__table}>
        <caption className={s.coefficient__caption}>Coefficient</caption>
        <thead className={s.coefficient__thead}>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th} />
            <th className={s.coefficient__th}>1</th>
            <th className={s.coefficient__th}>2</th>
            <th className={s.coefficient__th}>3</th>
            <th className={s.coefficient__th}>4</th>
            <th className={s.coefficient__th}>5</th>
            <th className={s.coefficient__th}>6</th>
            <th className={s.coefficient__th}>7</th>
            <th className={s.coefficient__th}>8</th>
            <th className={s.coefficient__th}>9</th>
            <th className={s.coefficient__th}>10</th>
          </tr>
        </thead>
        <tbody className={s.coefficient__tbody}>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>0</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>1</td>
            <td className={s.coefficient__td}>1</td>
            <td className={s.coefficient__td}>1</td>
            <td className={s.coefficient__td}>2</td>
            <td className={s.coefficient__td}>2</td>
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>1</th>
            <td className={s.coefficient__td}>3</td>
            <td className={s.coefficient__td}>1</td>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>2</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>10</td>
            <td className={s.coefficient__td}>2</td>
            <td className={s.coefficient__td}>1</td>
            <td className={s.coefficient__td}>1</td>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>3</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>45</td>
            <td className={s.coefficient__td}>10</td>
            <td className={s.coefficient__td}>3</td>
            <td className={s.coefficient__td}>2</td>
            <td className={s.coefficient__td}>2</td>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>4</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>80</td>
            <td className={s.coefficient__td}>20</td>
            <td className={s.coefficient__td}>15</td>
            <td className={s.coefficient__td}>4</td>
            <td className={s.coefficient__td}>5</td>
            <td className={s.coefficient__td}>2</td>
            <td className={s.coefficient__td} />
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>5</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>150</td>
            <td className={s.coefficient__td}>60</td>
            <td className={s.coefficient__td}>20</td>
            <td className={s.coefficient__td}>15</td>
            <td className={s.coefficient__td}>10</td>
            <td className={s.coefficient__td}>2</td>
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>6</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>500</td>
            <td className={s.coefficient__td}>80</td>
            <td className={s.coefficient__td}>50</td>
            <td className={s.coefficient__td}>125</td>
            <td className={s.coefficient__td}>10</td>
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>7</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>100</td>
            <td className={s.coefficient__td}>200</td>
            <td className={s.coefficient__td}>1000</td>
            <td className={s.coefficient__td}>125</td>
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>8</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>2000</td>
            <td className={s.coefficient__td}>5000</td>
            <td className={s.coefficient__td}>1000</td>
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>9</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>5000</td>
          </tr>
          <tr className={s.coefficient__tr}>
            <th className={s.coefficient__th}>10</th>
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td} />
            <td className={s.coefficient__td}>10000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Coefficient;
