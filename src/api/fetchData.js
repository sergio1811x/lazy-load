import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const FetchData = () => {
  const [raceData, setRaceData] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.npoint.io/85468b2272140ee50b09')
      .then((res) => {
        const timeSumPenalty = res.data.map((el) => +el.time + +el.penaltytime);
        const finalPlace = res.data
          .map((obj, i) => ({ ...obj, score: timeSumPenalty[i] }))
          .sort((a, b) => a.score - b.score);
        setRaceData(finalPlace);
      })
      .then()
      .catch((err) => console.log(err));
  }, []);

  return { raceData };
};
