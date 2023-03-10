import bcrypt from 'bcryptjs'
const users=[
    {
        name:"admin",
        email:"admin@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true        
    },
    {
        name:"Ali Raza",
        email:"ali@gmail.com",
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:"Hassan Raza",
        email:"hassan@gmail.com",
        password:bcrypt.hashSync('123456',10),
    },

]
export default users