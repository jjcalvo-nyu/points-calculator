import React from 'react'

const Transaction = (props) => {
    return (
        <div className='Transaction-container'>
            <div>
                <p>{props.i.purchase}</p>
            </div>
            <div>
                <p>Amount spent: ${props.i.cost}</p>
            </div>
            <div>
                <p>Points gained: {props.i.points}</p>
            </div>
        </div>
    )
}

export default Transaction