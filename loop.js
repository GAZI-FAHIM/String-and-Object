const mobile = {
    brand: 'Samsung',
    price: 34000,
    color: 'Black',
    camera: '12px'
}

for (const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

const keys = Object.keys(mobile)
console.log(keys)

for(const key of keys){
    console.log(key,' : ', mobile[key])
}