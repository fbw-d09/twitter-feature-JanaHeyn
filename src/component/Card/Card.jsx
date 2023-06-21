import React, { useState } from 'react';
import './Card.scss';

export const Card = ({ userName, name, comment, isFollowing }) => {

    const [isFollow, setIsFollow] = useState(isFollowing);

    // mouseover = background ändert sich von der Card
    const [isActive, setIsActive ] = useState('false');
    const toggleClass = (e) => {
        setIsActive(!isActive);
    }

    // mouseclick = toggeln für button className (=> und damit styling ändern) und following bzw follow
    const handleClick = () => {
        setIsFollow(!isFollow)
    }


    return (
        <div 
            className={` ${isActive ? 'active' : 'null'} Card `}
            onMouseOver={toggleClass}
        >
            <img src={`https://unavatar.io/twitter/${userName}`}></img>
            <div className='Text'>
                <p className='Text__name'><b>{name}</b></p>
                <p className='Text__username'>@{userName}</p>
                <p className='Text__comment'>{comment}</p>
            </div>
            <div className="buttonBox">
                <button 
                    className={ `follow ${isFollow && 'unfollow'}` } 
                    onClick={ handleClick }
                >
                <b>{isFollow ? 'Following' :'Follow'}</b>
                </button>
            </div>
        </div>
    )
}