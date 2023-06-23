import React, { useState } from 'react';
import './Card.scss';

export const Card = ({ userName, name, comment, isFollowing }) => {

    const [isFollow, setIsFollow] = useState(isFollowing);
    const [isActive, setIsActive ] = useState(false);

    const handleMouseOver = () => {
        setIsActive(true);
    }
  
    const handleMouseOut = () => {
      setIsActive(false);
    }

    // mouseclick = toggeln für button className (=> und damit styling ändern) und following bzw follow
    const handleClick = () => {
        setIsFollow(!isFollow)
    }


    return (
        <div 
            className={`Card ${isActive ? 'active' : 'inactive'}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
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