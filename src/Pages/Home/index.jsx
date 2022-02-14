import React from "react";
import PropTypes from "prop-types";
import BannerSlide from "../../components/Banner-slice";
import { Link } from "react-router-dom";
import { OutLineBtn } from "../../components/Button";
import MovieList from "../../components/MovieList";
import { category, movieType, tvType } from "../../api/moviesApi";
import "./home.scss";
Home.propTypes = {};

function Home(props) {
    return (
        <div>
            <BannerSlide />
            <div className="container list__container">
                <div className="section">
                    <div className="section__header">
                        <h2>Trending video</h2>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
                <div className="section">
                    <div className="section__header">
                        <h2>Top Rate video</h2>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>
                <div className="section">
                    <div className="section__header">
                        <h2></h2>
                    </div>
                    <MovieList category={category.movie} type={movieType.upcoming} />
                </div>
                <div className="section">
                    <div className="section__header">
                        <h2>Movies</h2>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>
                <div className="section">
                    <div className="section__header">
                        <h2>Tv Movies Popular</h2>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
                <div className="section">
                    <div className="section__header">
                        <h2>Tv Movies</h2>
                    </div>
                    <MovieList category={category.tv} type={tvType.on_the_air} />
                </div>
            </div>
        </div>
    );
}

export default Home;
