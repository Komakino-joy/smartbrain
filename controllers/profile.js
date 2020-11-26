const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({
        id:id
    }) //could also use {id} in ES6 since the property and value are the same.
        .then(user =>{
        if(user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('not found')
        }
    })
    .catch(err => res.status(400).json('error getting user'))
};


module.exports = {
    handleProfileGet 
};