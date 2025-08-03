//object declaration

const person = {
    name: 'Abul Mia',
    age: 25,
    profession: 'Developer',
    salary: 25000,
    married: true,
    'fav places':['bandarban','cox bazar','sylhet']
}

console.log(person)

//dot notation

console.log(person.age)

const job = person.profession
console.log(job)



//bracket notation
console.log(person['age'])
console.log(person['fav places'])

const keyName= 'profession'
console.log(person[keyName])



