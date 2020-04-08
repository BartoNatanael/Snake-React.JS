import React, {Component} from 'react';
import Cells from './Cells';
import GameOver from './GameOver';
import PointScore from './PointScore';
import GameStarter from './gameStarter';
import {START, BODY, FOOD, KEYS, COLS, ROWS, DIRS} from './const';
import "./style.css";

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            board: [],
            snake: [],
            direction: null,
            gameOver: false,
            speed: 2.5,
            points: 0,
            maxPoints: 0,
            gameStarted: false
        };

        this.start = this.start.bind(this)
        this.frame = this.frame.bind(this)
        this.handleKey = this.handleKey
    }

    // componentDidMount() {
    //     this.start()
    // }

    gameStarted (){
        this.setState({
            gameStarted: true
        })
    }

    start () {
        const board = [];
        
        const snake = [START];

        board[START] = BODY;

        this.gameStarted()

        this.setState({
            board,
            snake,
            direction: KEYS.right,
            gameOver: false,
            points: -1,
            speed: 2.5
        }, () => {
            this.frame();
        })
    }

    frame(){
        let {snake, board, direction} = this.state;

        const head = this.getNextIndex(snake[0], direction)

        const food = board[head] === FOOD || snake.length === 1

        if(snake.indexOf(head) !== -1) {
            this.setState({gameOver: true})

            return
        }

        if(food) {
            const maxCells = ROWS * COLS

            let i;

            do {
                i = Math.floor(Math.random() * maxCells)
            } while(board[i])

            board[i] = FOOD

            this.setState({
                speed: this.state.speed + 0.1,
                points: this.state.points + 1
            })
            if(this.state.points > this.state.maxPoints){
                this.setState({
                    maxPoints: this.state.points
                })
            }
        }else{
            board[snake.pop()] = null;
        }

        board[head] = BODY;
        snake.unshift(head)

        if(this.nextDirection){
            direction = this.nextDirection
            this.nextDirection = null
        }

        this.setState({
            board,
            snake,
            direction
        }, () => {
            setTimeout(this.frame,1000/this.state.speed)
        })
    }

    handleKey = (event) => {
        const direction = event.nativeEvent.keyCode

        const diff = Math.abs(this.state.direction - direction)

        if(DIRS[direction] && diff !== 0 && diff !== 2){
            this.nextDirection = direction
        }
    }

    getNextIndex(head, direction) {
        let x = head % COLS;
        let y = Math.floor(head / COLS);

        switch(direction){
            case KEYS.up: y = y <= 0 ? ROWS - 1 : y - 1; break;
            case KEYS.down: y = y>=ROWS ? 0 : y +1; break;
            case KEYS.left: x = x<=0 ? COLS - 1: x - 1; break;
            case KEYS.right: x = x >= COLS - 1 ? 0 : x +1; break;
            default: return;
        }

        return (COLS * y) + x;
    }

    render(){
        const {board} = this.state
        return(
            <div className="game">
            <PointScore points={this.state.points} maxPoints={this.state.maxPoints}/>
            <Cells
            handleKey={this.handleKey} 
            board={board}
            />
            {this.state.gameOver ?<GameOver start={this.start}/> : null}
            {this.state.gameStarted ? null : <GameStarter start={this.start}/>}
            </div>
        )
    }
}

export default Game;