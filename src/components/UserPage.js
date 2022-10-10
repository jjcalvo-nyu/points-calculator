import find from '../api/GETbyID'
import * as data from '../api/GET'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/UserPage.css'

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
                user.transactions[i].points = 0
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
            <Link to = '/'>Return</Link> 
            <h1>{user.name}</h1>
            <h3>Total points: {user.points}</h3>
            <table>
            <tr>
                <th>Purchase</th>
                <th>Amount</th>
                <th>Points</th>
            </tr>
            {user.transactions.map(i => (
                <tr>
                <td>{i.purchase}</td>
                <td>Amount spent: ${i.cost}</td>
                <td>Points gained: {i.points}</td>
            </tr>
            ))}
            </table>
        </div>
    )
}

export default UserPage