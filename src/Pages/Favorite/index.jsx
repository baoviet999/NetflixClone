import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import './styles.scss'
function Favorite(props) {
    const favorites = useSelector((state) => state.item.favorite);
    return (
        <>
            {favorites.length <= 0 ? (
                <div className="favorite__notitem">
                    <h1>No Film Yet!!!</h1>
                </div>
            ) : (
                <div className="movie-grid favorite__list">
                    {favorites.map((favorite, index) => (
                        <MovieCard item={favorite.item} />
                    ))}
                </div>
            )}
        </>
    );
}

export default Favorite;
