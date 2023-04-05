import React, { memo } from 'react';
import s from './User.module.css';
import { LogoUser } from '../../../assets/LogoUser';

export const User = memo(({ index, name, time, maxspeed, penaltytime }) => {
  return (
    <div className={s.list__container}>
      <div className={s.logo}>
        <LogoUser />
      </div>
      <div>
        <ul>
          <li>
            <i> Score: </i> {index}
          </li>
          <li>
            <i> Name: </i> {name.length <= 25 ? name : name.substring(0, 25) + '...'}
          </li>
          <li>
            <i>Time: </i>
            {new Date(time * 1000).toISOString().slice(11, 19)}
          </li>
          <li>
            <i>Max Speed: </i>
            {maxspeed} км/ч
          </li>
          <li>
            <i>Penalty time: </i>
            {new Date(penaltytime * 1000).toISOString().slice(14, 19)}
          </li>
        </ul>
      </div>
    </div>
  );
});
