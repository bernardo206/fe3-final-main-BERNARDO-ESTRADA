import { useEffect, useReducer,  } from 'react';
import Card from '../Components/Card';




const initialState = {
  favorites: [],
};



const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    case 'ADD_FAVORITE':
      const favorite = action.payload;
      return { ...state, favorites: [...state.favorites, favorite] };
    case 'REMOVE_FAVORITE':
      const updatedFavorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    default:
      return state;
  }
};



const Favs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { favorites } = state;
 

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];
    const uniqueFavorites = removeDuplicates(storedFavorites);
    dispatch({ type: 'SET_FAVORITES', payload: uniqueFavorites });
  }, []);

  const removeDuplicates = (favoritesArray) => {
    const uniqueFavorites = [];
    const ids = new Set();
    for (const favorite of favoritesArray) {
      if (!ids.has(favorite.id)) {
        uniqueFavorites.push(favorite);
        ids.add(favorite.id);
      }
    }
    return uniqueFavorites;
  };

  const handleRemoveFavorite = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  return (
    <main>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <Card
              name={favorite.name}
              username={favorite.username}
              id={favorite.id}
            />
            <button className={`btnRemoveFavs `}
              onClick={() => handleRemoveFavorite(favorite.id)}>------Eliminar de Favoritos-------</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Favs;
