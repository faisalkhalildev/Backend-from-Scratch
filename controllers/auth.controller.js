let users = [
    {id:1 , email:"shah@gmail.com", name:"shahfaisal"},
    {id:2 , email:"abs@gmail.com", name:"faisal"},
    {id:3 , email:"abc@gmail.com", name:"faisalshah"},
];

exports.addUser = (req , res) => {
    const addUser = {
        id: users.length + 1,
        email: req.body.email,
        name: req.body.name
    }
    console.log(req.body)
    users.push(addUser)
    res.send(users)
    return;
}