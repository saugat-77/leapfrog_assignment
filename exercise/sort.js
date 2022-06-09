//left
var arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Andrew",
  },
];

let temp=[]

for (let i =0; i<arr.length; i++){
    // console.log(arr[i].id)
    temp+=arr[i].name
}
console.log(temp.join(', '))

// console.log(arr.id)
// const keys=arr.keys()
// console.log(keys)
// function sortBy(array, key) {}

// for (let i=0; i<arr.length; i++){
//     // cons
// }
// // sortBy(arr, key)
