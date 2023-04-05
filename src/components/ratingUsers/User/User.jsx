import React from 'react';
import s from './User.module.css';
import { LogoUser } from '../../../assets/LogoUser';

export const User = ({ index, name, time, maxspeed, penaltytime }) => {
  return (
    <div className={s.list__container}>
      <div className={s.logo}>
        <LogoUser />
      </div>
      <div>
        <ul>
          <li>Место: {index}</li>
          <li>Фио: {name.length <= 25 ? name : name.substring(0, 25) + '...'}</li>
          <li>Общее время: {new Date(time * 1000).toISOString().slice(11, 19)}</li>
          <li>Максимальная скорость: {maxspeed} км/ч</li>
          <li>Штрафное время: {new Date(penaltytime * 1000).toISOString().slice(14, 19)}</li>
        </ul>
      </div>
    </div>
  );
};
