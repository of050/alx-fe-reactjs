import React from 'react';
import useStore from './store';

const FavouritesList = () => {
  const favourites = useStore(state => state.favourites);

  return (
    <div>
      <h2>Favourites</h2>
      <ul>
        {favourites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesList;