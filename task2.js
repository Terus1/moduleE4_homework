function hasPropOrNot(str, obj) {
    return str in obj;
}

let person = {
    name: 'Jack',
    age: 18,
    job: 'driver'
}

console.log(hasPropOrNot('name', person))
