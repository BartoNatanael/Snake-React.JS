import React from 'react';

const PointScore = (props) => {
    return (  
        <div className="pointScore">
            <div className='gameName'>
                <div className="b s"></div>
                <div className="b s0"></div>
                <div className="b s1"></div>
                <div className="b s2"></div>
                <div className="b s3"></div>
                <div className="b s4"></div>
                <div className="b s5"></div>
                <div className="b n"></div>
                <div className="b n0"></div>
                <div className="b n1"></div>
                <div className="b n2"></div>
                <div className="b n3"></div>
                <div className="b n4"></div>
                <div className="b a"></div>
                <div className="b a0"></div>
                <div className="b a1"></div>
                <div className="b a2"></div>
                <div className="b a3"></div>
                <div className="b a4"></div>
                <div className="b k"></div>
                <div className="b k0"></div>
                <div className="b k1"></div>
                <div className="b k2"></div>
                <div className="b k3"></div>
                <div className="b k4"></div>
                <div className="b k5"></div>
                <div className="b k6"></div>
                <div className="b e"></div>
                <div className="b e0"></div>
                <div className="b e1"></div>
                <div className="b e2"></div>


                
            </div>
            <div className='score'>
            <p>Your score: 
            <br/>
            <span>{props.points}</span> 
            <br/> <br/>
            Highest score: 
            <br/>
            <span>{props.maxPoints}</span></p>
            </div>
        </div>
    );
}
 
export default PointScore;