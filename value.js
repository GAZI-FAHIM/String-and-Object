const person = {
    name: 'Abul Mia',
    age: 25,
    profession: 'Developer',
    salary: 25000,
    married: true,
    'fav places':['bandarban','cox bazar','sylhet']
}

person.salary = 30000
person['age'] = 26
person['fav places'] = ['Dhaka','Gazipur','Tangail']

const keyWord = 'name'
person[keyWord] = 'Hashem'



console.log(person)