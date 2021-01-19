import React, { Component } from 'react'
import Button from './Button'
import ListItem from './ListItem'

export default class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            inputValue: '',
        }
    }

    handleChange = (e) => {
        this.setState({inputValue : e.target.value})
    }

    handleAddItem = () => {
        const newItems = [this.state.inputValue, ...this.state.items]
    
        this.setState({
            items: newItems,
            inputValue: '',
        })
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            const newItems = [this.state.inputValue, ...this.state.items]
        
            this.setState({
                items: newItems,
                inputValue: '',
            })
        }
    }

    handleRemoveItem = (id) => {
        const newItems = this.state.items.filter((item,i)=> i !== id)

        this.setState({
            items: newItems,
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    placeholder={"請輸入文字"}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    />
                 <button onClick={this.handleAddItem}>新增項目</button>
                <ul>
                {
                    this.state.items.map((value, id) => {
                    return <li key={value}  onClick={() => this.handleRemoveItem(id)} >
                        {value}
                    </li>
                    })
                }
                </ul>
            </div>
        )
    }
}
