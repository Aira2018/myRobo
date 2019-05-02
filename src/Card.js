import React from 'react';

var Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 mr3 mt3 ml3 mb3 grow bw2 shadow-5'>
            <img alt='' src={`https://robohash.org/${id}`}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;