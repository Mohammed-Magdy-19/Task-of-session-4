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

const users_filter = users.filter(user => user["age"] > 19)
const mapping_users = users.map(user => user["age"] += 1)
const users_mapped = {...users, mapping_users}
console.log(users_filter);
console.log("===========================================================")
console.log(users);