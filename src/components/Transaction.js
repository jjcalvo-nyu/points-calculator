import React from 'react'

const Transaction = (props) => {
    console.log(props.i)
    return (
        <div>
            <p>{props.i.purchase}</p>
            <p>{props.i.cost}</p>
            <p>{props.i.points}</p>
        </div>
    )
}

export default Transaction