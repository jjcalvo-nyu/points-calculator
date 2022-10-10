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
            } else if (cost < 100 || cost === 100) {
                points = points + (cost - 50)
                user.transactions[i].points = (cost - 50).toFixed(2)
            } else {
                points = points + ((cost - 100)*2)
                user.transactions[i].points = ((cost - 100)*2).toFixed(2)
            }
        }
        return points
    }
    user.points = calcPoints(user).toFixed(2)
    console.log(user)
    return(
        <div>
            <p>{user.name}</p>
            <p>{user.points}</p>
            {user.transactions.map(i => (
                <Transaction i={i} />
            ))}
        </div>
    )
}

export default UserPage