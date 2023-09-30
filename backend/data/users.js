import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "Jay Khakim",
        email: "mgmediajya@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    {
        name: "Ibo",
        email: "ibo@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    
]

export default users;