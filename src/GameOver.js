import React from 'react';
import './style.css';

const GameOver = (props) => {
    return ( 
        <div className='gameOver'>
            <h2>Game Over</h2>
            <button onClick={props.start}>Play again</button>
        </div>
     );
}
 
export default GameOver;
