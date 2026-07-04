const users = [
    {
        name: "mohammed",
        age: 20,
    },
    {
        name: "ali",
        age: 22,
    },
    {
        name: "sara",
        age: 19,
    }
]

const users_filter = users.filter(user => user > 19)
console.log(users_filter);