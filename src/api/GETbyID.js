const find = (id, data) => {
    let userByID = {}
    for (let i = 0; i < data.length; i++){
        if (parseInt(data[i].id) === parseInt(id)){
        userByID = data[i]
        }
    }
    return userByID
}

export default find