import React from 'react';
import Card from './Card';

var CardList = (props) => {
    const { robots } = props;
    const userList = robots.map((user, i) => {
        return (
            <Card key={robots[i].id}
             id={robots[i].id} 
             name={robots[i].name} 
             email={robots[i].email}/>
        );
    })
    return(
        <div>
            { userList }
        </div>
    );
}
export default CardList;