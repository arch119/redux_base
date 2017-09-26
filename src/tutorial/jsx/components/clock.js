import React from 'react'

const Counter = ({counter, onClick}) => {
    return (
        <div>
            <h3> Counter: {counter} </h3>
            {   counter <10 && 
                <button onClick={()=>onClick()}> Counter++ </button>
            }
        </div>
    )
}

export default class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            counter: 0
        }
    }
    componentDidMount(){
        this.timerId = setInterval(()=>this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState(function(prevState,props){
            return {
                date: new Date(),
                counter: prevState.counter
            }
        })
    }

    incCounter = () => {
        this.setState(function(prevState, props){
            return {
                date: prevState.date,
                counter: prevState.counter + 1
            }
        })
    }

    render(){
        return (
            <div>
                <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
                <Counter counter={this.state.counter} onClick={this.incCounter} />
            </div>
        )
    }
}