import React from 'react';

const GameStarter = (props) => {
    return ( 
        <div className="gameOver">
            <button
            onClick={props.start}
            >Start game</button>
        </div>
     );
}
 
export default GameStarter;