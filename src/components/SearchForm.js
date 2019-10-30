import React from 'react';

const SearchForm = props => {
    const { changeHandler, searchKeywords, searchKeyPress, keyword } = props;
    return ( 
        <div className="searchForm">
            <input name="keyword" placeholder="Search" 
                onChange={changeHandler} 
                onKeyPress={(e) => searchKeyPress(e)}
                autoFocus
            />
            <button 
                onClick={searchKeywords}
                disabled={!keyword}> <i className="fas fa-search"></i> </button>
        </div>
    );
}
 
export default SearchForm;