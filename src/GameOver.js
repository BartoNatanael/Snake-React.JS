import React from 'react';
import './style.css';

const GameOver = (props) => {
    return ( 
        <div className='gameStarter'>
            <h2>Game Over</h2>
            <button onClick={props.start}>Play again</button>
        </div>
     );
}
 
export default GameOver;
