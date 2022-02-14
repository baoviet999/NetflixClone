import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../api/apiConfig";
import moviesApi, { category } from "../../api/moviesApi";
import MovieCard from "../MovieCard";
import "./MovieList.scss";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { TrailerModal } from "../Banner-slice";
const MovieList = (props) => {
    const [items, setItems] = useState([]);
    SwiperCore.use([Autoplay, Navigation]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== "similar") {
                switch (props.category) {
                    case category.movie:
                        response = await moviesApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await moviesApi.getTvList(props.type, { params });
                }
            } else {
                response = await moviesApi.similar(props.category, props.id);
            }
            setItems(response.results);
        };
        getList();
    }, []);
    
    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={2}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    600: {
                        slidesPerView: 3,
                    },
                    960: {
                        slidesPerView: 6,
                    },
                }}
                navigation={{
                    nextEl: ".next__item",
                    prevEl: ".prev__item",
                }}
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        <MovieCard item={item} category={props.category} />
                    </SwiperSlide>
                ))}
                {items.map((item, index) => (
                    <TrailerModal key={index} newitem={item} />
                ))}
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default MovieList;
