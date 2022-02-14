import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../api/apiConfig";
import moviesApi, { category } from "../../api/moviesApi";
import movieApi, { movieType } from "../../api/moviesApi";
import Button from "../Button";
import Modal, { ModalContent } from "../modal";
import "./slide.scss";
BannerSlide.propTypes = {};

function BannerSlide(props) {
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    const [movieItem, setMovieItem] = useState([]);
    useEffect(() => {
        async function getMovie() {
            const params = { page: 3 };
            try {
                const response = await movieApi.getMoviesList(movieType.popular, { params });
                setMovieItem(response.results.slice(0, 15));
                console.log(response.results);
            } catch {
                console.log("error");
            }
        }
        getMovie();
    }, []);
    return (
        <div className="banner-slide">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                navigation={
                    {
                        // nextEl: ".btnnn",
                        // prevEl: ".btnnn1",
                    }
                }
            >
                {movieItem.map((item, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <BannerSlideItem item={item} className={`${isActive ? "active" : ""}`} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {movieItem.map((item, index) => (
                <TrailerModal key={index} newitem={item} />
            ))}
        </div>
    );
}
const BannerSlideItem = (props) => {
    let history = useHistory();
    const { item } = props;
    const background = apiConfig.originalImg(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const videos = await movieApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
            modal.querySelector(".modal__content > iframe").setAttribute("src", videSrc);
        } else {
            modal.querySelector(".modal__content").innerHTML = "No trailer";
        }
        modal.classList.toggle("active");
    };
    const link = "/movie/" + item.id;
    return (
        <div
            className={`banner-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="banner-slide__item__content container">
                <div className="banner-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="banner__slide-btn">
                        <Link to={link}>
                            <Button
                                style={{ marginRight: "6px" }}
                                background={"#fff"}
                                icon={"bx bx-play"}
                            >
                                Play
                            </Button>
                        </Link>
                        <Button
                            background={{ background: "rgba(109,109,110,0.7)", color: "#fff" }}
                            icon={"bx bx-info-circle"}
                            onClick={setModalActive}
                        >
                            Watch trailer
                        </Button>
                    </div>
                </div>
                <div className="banner-slide__item__content__poster">
                    <img src={apiConfig.w500Img(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    );
};

export const TrailerModal = ({ newitem }) => {
    const iframeRef = useRef(null);
    const onClose = () => iframeRef.current.setAttribute("src", "");

    return (
        <Modal active={false} id={`modal_${newitem.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    );
};

export default BannerSlide;
