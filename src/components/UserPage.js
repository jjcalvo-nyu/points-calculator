import find from '../api/GETbyID'
import * as data from '../api/GET'
import React from 'react'
import Transaction from './Transaction'

const UserPage = () => {
    const dataArray = data.data
    const id = window.location.href.split('/')[4]
    const user = find(id, dataArray)
    const calcPoints = (user) => {
        const transactions = user.transactions
        let points = 0
        for (let i = 0; i < transactions.length; i++){
            const cost = transactions[i].cost
            if (cost < 50) {
                points = points + 0
            } else if ((cost > 50 && cost < 100) || cost === 100) {
                points = points + (cost - 50)
                user.transactions[i].points = (cost - 50).toFixed(2)
            } else if (cost > 100){
                points = points + ((cost - 100)*2)
                points = points + ((cost - (cost - 100)) - 50)
                user.transactions[i].points = ((cost - 100)*2)
                user.transactions[i].points = (user.transactions[i].points + ((cost - (cost - 100)) - 50)).toFixed(2)
            }
        }
        return points
    }
    user.points = calcPoints(user).toFixed(2)
    return(
        <div>
            <h1>{user.name}</h1>
            <h3>Total points: {user.points}</h3>
            {user.transactions.map(i => (
                <Transaction i={i} />
            ))}
        </div>
    )
}

export default UserPage