import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moviesApi, { category, movieType, tvType } from "../../api/moviesApi";
import MovieCard from "../MovieCard";
import Button from "../../components/Button";
import "./movie.scss";
import SearchInput from "../SearchInput";
import { useHistory } from "react-router-dom";
function MovieGrid(props) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { keyword } = useParams();
    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await moviesApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await moviesApi.getTvList(tvType.on_the_air, { params });
                }
            } else {
                const params = {
                    query: keyword,
                };
                response = await moviesApi.search(props.category, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        };
        getList();
    }, [props.category, keyword]);
    const loadmore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1,
            };
            switch (props.category) {
                case category.movie:
                    response = await moviesApi.getMoviesList(movieType.upcoming, { params });
                    console.log(response.results);
                    break;
                default:
                    response = await moviesApi.getTvList(tvType.on_the_air, { params });
                    console.log(response.results);
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };
            response = await moviesApi.search(props.category, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    };
    return (
        <>
            
            <div className="movie-grid">
                {items.map((item, i) => (
                    <MovieCard category={props.category} item={item} key={i} />
                ))}
            </div>
            {page < totalPage ? (
                <div className="movie-grid__loadmore">
                    {/* <Button className="sm" onClick={loadmore}></Button> */}
                </div>
            ) : (
                ""
            )}
        </>
    );
}
const SearchMovie = (props) => {
    const history = useHistory();
    const [keyword, setKeyWord] = useState(props.keyword ? props.keyword : "");
    const goToSearch = useCallback(() => {
        if (keyword.trim().lenght > 0) {
            history.push(`/${category[props.category]}/search/${keyword}`);
        }
    }, [keyword, props.category, history]);
    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        };
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        }
    },[keyword, goToSearch]);
    return (
        <div className="movie-search">
            <SearchInput
                type="text"
                placeholder="Tim kiem"
                value={keyword}
                onChange={(e) => setKeyWord(e.target.value)}
            />
            <button onClick={goToSearch}>tim</button>
        </div>
    );
};
export default MovieGrid;
