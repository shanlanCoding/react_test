import React from 'react';

class DigitalClock extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
        }
    }

    componentDidMount() {
        this.timer = setInterval( ()=>{
            this.setState({
                date: new Date()
            });
        },5000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot);
    }

    render() {
        return(
            <div className="digital-clock-component jumbotron">
                <h1> {this.state.date.toLocaleTimeString()}</h1>
            </div>

        )
    }
}
export default DigitalClock;