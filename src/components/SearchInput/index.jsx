import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
SearchInput.propTypes = {
    
};

function SearchInput(props) {
    return (
        <input
            className='search-input'
            type={props.type}
            placeholder={props.placeholder}
            values={props.values}
            onChange={props.onChange ? (e)=> props.onChange(e) : null}
        />
    );
}

export default SearchInput;