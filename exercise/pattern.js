const prompt = require("prompt-sync")({ sigint: true });
//With readline
const n = prompt("Enter total number: ");

if (n != null) {
   
    function pattern(num){
        temp=" "
        if (num==0){
            return 0
        }

        for(let i=0; i<num; i++){
            temp += "* "
        }

        console.log(temp)
        pattern(num-1)

    }
    pattern(n);
}

// {

// let temp = ""
// for (let i=n; i>0; i--){
//     for (let j=n-i; j<n; j++){
//         temp = temp + "* ";
//     }
//     console.log(temp);
//     temp = "";
// }
// }

