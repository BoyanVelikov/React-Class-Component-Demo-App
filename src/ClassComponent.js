import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            shouldRender: false
        };

        this.generateRandomNumber = this.generateRandomNumber.bind(this);
        this.shouldRender = this.shouldRender.bind(this);
    }

    componentDidMount() {
        console.log('Our component mounted', this.props);
    }

    componentDidUpdate() {
        console.log('Our component re-rendered itself', this.state);
    }

    render() {
        return ( <div>
            <button onClick={this.shouldRender}>Click me</button>
            {this.state.shouldRender && <p>Hey, I render conditionally</p>}
            <button onClick={this.generateRandomNumber}>Click me</button> 
            <p>Here is your number {this.state.number}</p> 
            </div>
        )
    }

    generateRandomNumber() {
        const number = Math.floor(Math.random() * 10);
        this.setState({
            number: number
        });
    }

    shouldRender() {
        if (this.state.shouldRender === false) {
            this.setState({
                shouldRender: true
            });
            return;
        }
        if (this.state.shouldRender === true) {
            this.setState({
                shouldRender: false
            });
            return;
        }
    }
}