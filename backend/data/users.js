import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Mike Doe',
        email: 'mike@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Mary Doe',
        email: 'mary@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users