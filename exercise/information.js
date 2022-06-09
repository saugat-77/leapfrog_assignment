const myInfo={
    name:'Saugat Acharya',
    address:'Dhapasi',
    Email:'saugat@hotmail.com',
    education:[{
        name:"Galaxy Public School",
        enrolledDate: '2010'
    },
    {
        name:"Kathmandu Model College",
        enrolledDate:'2018'
    },
    {
        name:"Kathmandu Engineering College",
        enrolledDate:"2020"
    }]

}
myInfo.education.forEach((edu)=>{
    console.log(edu)
})