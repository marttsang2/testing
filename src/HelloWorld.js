import React, {Component} from 'react'

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            window : this,
        };
    }

    handleChange = (textChange) => {
        if (textChange.target instanceof HTMLInputElement) {
            this.setState({text : textChange.target.value})
        }
        console.log(this.state.window)
    }

    render() {
        return (
            <div>
                <input type="text" 
                value={this.state.text} 
                placeholder="input your text"
                onChange={this.handleChange}
                />
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}
