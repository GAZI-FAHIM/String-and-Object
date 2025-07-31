const college = 'Milestone coll ege'
console.log(college)
console.log(college.toLowerCase())
console.log(college.toUpperCase())

const subject = 'Chemistry'
const book = 'chemistry'

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('ja porte bho')
}else{
    console.log('jaiya ghuma')
}


//trim 

const liquid = 'water'
const water = 'water '

if(liquid.trim === water.trim){
    console.log('Another name of life is water')
}else{
    console.log('Out of the course')
}