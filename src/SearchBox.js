import React from 'react';

const SearchBox = (props) => {
    const { searchChange } = props;

    return (
        <div>
            < input className='pa3 ba b--green bg-lightest-green tc'
            type='search' 
            placeholder='search robots'
            onChange= {searchChange}
            />
        </div>

    );
}
export default SearchBox;