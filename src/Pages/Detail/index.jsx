import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import moviesApi, { category } from '../../api/moviesApi';
import apiConfig from '../../api/apiConfig';
import './style.scss'
import MovieList from '../../components/MovieList';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import StarIcon from "@material-ui/icons/Star";
import Button from '../../components/Button';
import { TrailerModal } from '../../components/Banner-slice';
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
                    <button
                        className="detail__play-btn"
                        onClick={setModalActive}
                        style={{color : '#000', background : '#fff', display : 'flex', alignItems : 'center' , justifyContent : 'center', padding : ' 5px 10px', border : 'none', outline :'none', borderRadius : '10px'}}
                    >
                        <i className="bx bx-play"></i>
                        PlayNow
                    </button>
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
            <TrailerModal newitem={item} />
        </>
    );
}

export default Detail;