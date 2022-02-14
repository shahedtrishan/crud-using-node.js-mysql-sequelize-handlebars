const User = require('../models/User');

const allUsers = async (req,res)=>{
    const users = await User.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('home', {users});
}

const userForm = async (req,res)=>{
    await res.render('create');
}

const saveUser = async (req,res)=>{
    const {name,email,expertise}= await req.body;
    const user = await User.create({
        name, email, expertise
    })
    .catch(error=>console.log(error))
console.log(user)
  await res.redirect('/');
    

}

const editUser = async (req, res)=>{
    const{id} = await req.params;
const user = await User.findOne({
    where:{
        id:id
    },
    raw:true
}).catch(error=>console.log(error))
    res.render('edit', {user})
}

const updateUser = async (req, res)=>{
    const{id} = req.params;
    const data = req.body;
    const selector = {where:{id:id}}

await User.update(data, selector).catch(error=>console.log(error))
    res.redirect('/')
}

const viewUser = async (req, res)=>{
    const{id} = req.params;
    const user = await User.findOne({
    where:{
        id:id
    },
    raw:true
}).catch(error=>console.log(error))
    res.render('user', {user})
}

const deleteUser = async (req, res)=>{
    const{id} = req.params;
    const user = await User.destroy({
    where:{
        id:id
    },
    raw:true
}).catch(error=>console.log(error))
    
    res.redirect('/')

}


module.exports = {
    allUsers, userForm, saveUser, editUser, updateUser, viewUser, deleteUser
}