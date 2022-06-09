const fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

function searchByName(falful, x){
    // console.log(falful)
    let temp
    falful.forEach ((fruit) => {

        if (fruit.name.toLowerCase()==x.toLowerCase()){
            temp=fruit
        }
    }
    );
    // console.log(temp)
    return temp
}
console.log(searchByName(fruits, 'apple'));