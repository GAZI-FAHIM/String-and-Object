const college = {
    name: 'Milestone College',
    code: 45,
    function: ['bijay divos'],
    unique:{
        dress: 'blue'
    },
    result:{
        merit: 'top',
        gpa: 5
    }
}
console.log(college)

console.log(college['name'])
console.log(college['unique'].dress)
college.function[0] = '16 December'

console.log(college.function[0])

college.result.gpa = 4.67
console.log(college.result.gpa)

//delete a class

delete college.code
console.log(college)