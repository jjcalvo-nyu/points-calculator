import React from 'react'

const User = (props) => {
    return (
        <div>
            <p>{props.i.name}</p>
            <p>Rewards: {props.i.points} Points</p>
        </div>
    )
}

export default User