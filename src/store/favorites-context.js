import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteStattion) => {},
  removeFavorite: (stationID) => {},
  itemIsFavorite: (stationID) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoritesHandler = (favoriteStation) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteStation);
    });
  };

  const removeFavoritesHandler = (stationID) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((station) => station.id !== stationID);
    });
  };
  const itemIsFavoriteHandler = (stationID) => {
    return userFavorites.some((station) => station.id === stationID);
  };
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
