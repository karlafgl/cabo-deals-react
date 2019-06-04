import React from 'react'

const SearchActivity = ({onInputChange}) => {
    return(
        <div className="pa2 tc">
            <p><i class="fas fa-2x fa-search"></i></p>
            <input type="search" placeholder="Search your Activity" 
            className="pa3 ba b--green bg-lightest-blue"
            onChange={onInputChange}
            />
        </div>
    )
}

export default SearchActivity