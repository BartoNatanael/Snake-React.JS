import React from 'react';

const GameStarter = (props) => {
    return ( 
        <div className="gameStarter">
            <button
            onClick={props.start}
            >Start game</button>
        </div>
     );
}
 
export default GameStarter;