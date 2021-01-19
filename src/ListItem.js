import React from 'react'

const ListItem = (props) => {
    return (
        <li onClick={props.onItemClick}>{props.text}</li>
    )
}

export default ListItem
