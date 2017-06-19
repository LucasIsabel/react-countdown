import React, {Component} from 'react';
import Clock from "./../Clock/Clock";
import "./Timer.css";

class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "LUCAS OLIVEIRA",
            deadline: "December 25, 2017",
            newDeadLine: ""
        }
    }

    changeMonth = () => {
        this.setState({ deadline : this.state.newDeadLine })
    }

    render() {
        return (
            <div>
                <div>CountDown to {this.state.deadline}</div>
                <Clock deadline = {
                    this.state.deadline
                } />
                <div>
                    <input
                        onChange={event => this.setState({newDeadLine: event.target.value})}
                        type="text"
                        className="input-timer"/>
                    <button onClick={() => this.changeMonth()} className="btn btn-success btn-style">Send</button>
                </div>
            </div>
        )
    }
}

export default Timer;