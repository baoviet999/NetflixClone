import React, { useState } from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import moviesApi, { category } from "../../api/moviesApi";
import "./moviecard.scss";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../MovieList/itemSlice";
import { useSnackbar } from "notistack";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function MovieCard(props) {
    const item = props.item;

    const link = "/" + category[props.category] + "/" + item.id;
    const background = apiConfig.w500Img(item.poster_path || item.backdrop_path);

    const [isHover, setIsHover] = useState(false);
    const filmItem = useSelector((state) => state.item.favorite);
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();
;
    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const videos = await moviesApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
            modal.querySelector(".modal__content > iframe").setAttribute("src", videSrc);
        } else {
            modal.querySelector(".modal__content").innerHTML = "No trailer";
        }
        modal.classList.toggle("active");
    };
    const handleFavorite = () => {
        dispatch(addToFavorite({ id: item.id, item }));
        enqueueSnackbar("Add to favorite success fully", {
            variant: "success",
            autoHideDuration: 3000,
        });
    };
    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`movie__item ${isHover ? "active" : ""}`}
        >
            <div className={`movie__item-img`}>
                <Link to={link}>
                    <LazyLoadImage alt="img" height="100%" src={background} width="100%" effect="blur" />
                </Link>
            </div>
            <div className="movie__item-title">
                <span>{item.title || item.name}</span>
            </div>
            <div className={`movie__item-more ${isHover ? "active" : ""}`}>
                <div className="movie__item-btn">
                    <div className="movie__item-btn--left">
                        <div
                            onClick={setModalActive}
                            style={{ marginRight: "10px", cursor: "pointer" }}
                            className="movie__item-btn-outline"
                        >
                            <PlayArrowIcon />
                        </div>
                        <div
                            className="movie__item-btn-outline"
                            onClick={handleFavorite}
                            style={{ cursor: "pointer" }}
                        >
                            <FavoriteIcon />
                        </div>
                    </div>
                    <div className="movie__item-btn--right">
                        <div className="movie__item-btn-outline">
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                </div>
                <div className="movie__item-name">
                    <span>{item.title || item.name}</span>
                    <div className="movie__item-vote">
                        <span>
                            {item.vote_average}
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </span>
                        <span>{item.vote_count} vote</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
