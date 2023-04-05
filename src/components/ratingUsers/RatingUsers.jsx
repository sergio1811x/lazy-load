import React, { useEffect, useState } from 'react';
import { User } from './User/User';
import s from './RatingUsers.module.css';
import { FetchData } from '../../api/fetchData';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../loader/Loader';

export const RatingUsers = () => {
  const LIMIT = 50;
  const { raceData } = FetchData();
  const [lazyLoadData, setLazyLoadData] = useState([]);
  const [visible, setVisible] = useState(LIMIT);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLazyLoadData(raceData.slice(0, LIMIT));
  }, [raceData]);

  const lazyData = () => {
    const newLimit = visible + LIMIT;
    const dataToAdd = raceData.slice(visible, newLimit);
    if (raceData.length > lazyLoadData.length) {
      setTimeout(() => {
        setLazyLoadData([...lazyLoadData].concat(dataToAdd));
      }, 1200);
      setVisible(newLimit);
    } else setHasMore(false);
  };

  return (
    <div className={s.wrapper}>
      {lazyLoadData.length > 0 ? (
        <InfiniteScroll
          next={lazyData}
          dataLength={lazyLoadData.length}
          hasMore={hasMore}
          loader={
            <div className={s.loading__block}>
              <img className={s.loading} src={require('../../assets/images/loading-waiting.gif')} />
            </div>
          }
        >
          {lazyLoadData.map((user, index) => {
            return <User key={user._id} {...user} index={index + 1} />;
          })}
        </InfiniteScroll>
      ) : (
        <Loader />
      )}
    </div>
  );
};
