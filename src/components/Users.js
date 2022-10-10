import * as data from '../api/GET'
import React from 'react'
import User from './User'

const dataArray = data.data
const Users = () => {
    const calcPoints = (user) => {
        const transactions = user.transactions
        let points = 0
        for (let i = 0; i < transactions.length; i++){
            const cost = transactions[i].cost
            
            if (cost < 50) {
            } else if (cost < 100 || cost === 100) {
                points = points + (cost - 50)
            } else {
                points = points + ((cost - 100)*2)
            }
        }
        return points
    }
    for (let i = 0; i < dataArray.length; i++){
        dataArray[i].points = calcPoints(dataArray[i]).toFixed(2)
    }
    return (
        <div>
            {dataArray.map(i => (
                <User i={i} key={i.id}/>
            ))}
        </div>
    )
}

export default Users