import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import moviesApi from '../../api/moviesApi';
import apiConfig from '../../api/apiConfig';
import './style.scss'
import MovieList from '../../components/MovieList';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import StarIcon from "@material-ui/icons/Star";
import Button from '../../components/Button';
Detail.propTypes = {
    
};

function Detail(props) {
    const info = useParams()
    const [item, setItem] = useState({})
    useEffect(() => {
        const fetchDetail = async () => {
            const params = {};
            try {
                const response = await moviesApi.detail(info.category, info.id, { params })
                window.scrollTo({ top: 0, behavior: "smooth" });
                setItem(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetail()
    }, [info])
    const background = apiConfig.w500Img(item.poster_path || item.backdrop_path);
    return (
        <>
            <div className="detail container">
                <div className="detail__img">
                    <LazyLoadImage
                        alt="img"
                        height="100%"
                        src={background} // use normal <img> attributes as props
                        width="100%"
                        effect="blur"
                    />
                </div>
                <div className="detail__info">
                    <h3>{item.original_title}</h3>
                    <p>{item.overview}</p>
                    <span className="detail__date">
                        Day relese : <a href="">{item.release_date}</a>
                    </span>
                    <div className="detail__vote">
                        <span>
                            {item.vote_average}
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </span>
                        <span>{item.vote_count} view</span>
                    </div>
                    <Button background={{ background: "#fff", color: "#000" }} icon={"bx bx-play"}>
                        Play Now
                    </Button>
                </div>
            </div>
            <div className="section">
                <div className="section__header">
                    <h2>Related videos</h2>
                </div>
                <MovieList category={"movie"} type={"popular"} />
            </div>
            <div className="section" style={{ marginTop: "15px" }}>
                <MovieList category={"tv"} type={"popular"} />
            </div>
            <div className="section" style={{ marginTop: "15px" }}>
                <MovieList category={"movie"} type={"upcoming"} />
            </div>
        </>
    );
}

export default Detail;