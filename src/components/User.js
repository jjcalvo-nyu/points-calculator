import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => {
    return (
        <div>
            <Link to={`/user/${props.i.id}`}>{props.i.name} </Link>
            <p>Rewards: {props.i.points} Points</p>
        </div>
    )
}

export default User