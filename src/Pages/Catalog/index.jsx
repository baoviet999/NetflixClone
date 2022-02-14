import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import {category as cate} from '../../api/moviesApi'
import MovieGrid from '../../components/MovieGrid';
Catalog.propTypes = {
    
};

function Catalog(props) {
    const { category } = useParams()
    return (
        <div>
            <PageHeader>
                {category === cate.movie ? 'Movies': 'Tv'}
            </PageHeader>
            <div className="container">
                <div className="section">
                    <MovieGrid category={category} title='aaaaaaa' />
                </div>
            </div>
        </div>
    );
}

export default Catalog;