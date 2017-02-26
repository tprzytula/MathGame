import React from 'react';
import styles from './styles/gameBoard.scss';
import AnswerButton from '/client/modules/game/containers/answerButton';

const GameBoard = class extends React.Component {
    render() {
        return (
            <div className={styles.gameBoard}>
                EQUATION <br/>
                {this.props.firstNumber} {this.props.equation} {this.props.secondNumber} = ?

                <br/>ANSWERS
                <AnswerButton answer={this.props.answerOne}/>
                <AnswerButton answer={this.props.answerTwo}/>
                <AnswerButton answer={this.props.answerThird}/>
                <AnswerButton answer={this.props.answerFour}/>
            </div>
        );
    }
};

GameBoard.propTypes = {

};

export default GameBoard;
