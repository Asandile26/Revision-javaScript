// console.log("sqrt()")

//Return a middle element(s)
// let data = [9, 3, 1, "Maxwill", 5, 10];
//To return the highest number
// let onlyNumbers = data.splice(3, 1);
// let onlyNumbers = data.filter(item=> {
//     if( typeof item != 'string')
//     return item;
// })
// console.log("Max: ", Math.max(...onlyNumbers));
// let size = data.length - 1; 
// console.log("Array size:", size );
// console.log("Element" , data[size]);
// console.log("at();", data.at(-1));
// let middleIndex = Math.trunc((data.length - 1)/ 2);
// console.log("middle Element:", data[middleIndex]);
// console.log("middle Element:", data.slice(middleIndex, middleIndex + 2));

//Odd Number
// let middleIndex = Math.trunc((data.length - 1)/ 2);
// if(data.length % 2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex +2));
// }else{
//     console.log(data[middleIndex]);
// }
// let myDate = new Date();

// console.log("getMonths()", myDate.getMonth()+ 1  );
// console.log("My date:", myDate);

//string method
// let sentence = "I love programming"
// console.log(sentence.split(' '));

// let myDate = new Date();
// console.log("My date:", myDate.toLocaleDateString());
// console.log("getDate()",myDate.toLocaleDateString(getDate())+5);

// let currentDate = myDate.getDate();
// console.log("setDate(): ", new Date(myDate.setDate(currentDate + 5)));

// if statement
// let age = 17;
// if(age >17) {
//     console.log("You're qualified");
// }
// else {
//     console.log("You're not qualifed")
// }

//Nested if statement (not liked by Joel)
// let age = 18;
// let salary = 4000;
// if(age > 17) {
//     if(salary >= 5000); {
//         console.log("well done");
//     }
//  }else {
//         console.log("You're not qualified");
// }
// if((age > 17) && (salary >= 5000)) {
//     console.log("well done");
// }else{
//     console.log("you in a dog")
// }

// let monthInt = 1;
// switch(monthInt) {
//     case 1:
//         console.log("January");
//         break;
//         case 2:
//             console.log("february");
//         break;
// }

// let grade = 48;
// switch(true) {
//     case grade == 100:
//         console.log("You're awesome")
//     break;
//     case (grade >= 90) && (grade <= 99):
//         console.log("well done");
//     break;
//     case (grade >= 75) && (grade <= 89):
//         console.log("distinction");
//     break;
//     case (grade >= 50) && (grade <= 74):
//         console.log("pass");
//      case (grade <= 49):
//         console.log("You're in a dog");
//     break;
//     default:
//         console.log("Out of range")
// }

// for in loop
// let numbers = [8, 9, 3, 12, 34];
// for(let numb in numbers) {
//     console.log(numb);
// }
// for(let numb in numbers) {
//   console.table(numbers)
// }

// let cnt = 0;
// while(cnt < numbers.length) {
//     console.log(`step: ${numbers[cnt]}`);
//     cnt++;
// }
//do ... while
// do{
//     console.log(`step: ${numbers[cnt]}`);
//     cnt++;
// }while(cnt < numbers.length);


// function
// function addition(numb1, numb2) {
//     console.log("Sum is:", numb1 + numb2);
// }
// addition(4, 5);
// addition(5, 7);
// addition(9, 23);

// ternary operator
// let age = 17;
// console.log(age >17 ? "You're qualified": "you in a dog");

//Rest Operator
// function sumOf(...arg) {
//     return arg.reduce((a, b)=>{
//         return a + b
//     })
// }
// console.log(sumOf(1, 2, 3))

//Constructor function
// function Person(...details) {
//     this.firstName = details[0];
//     this.lastName = details[1];
//     this.email = details.at(-1);
// }
// let person1 = new Person("Konke", "Deno", "deno@gmail.com")
// console.log(person1)

//Reduce - allows you to take one value 
// let numbers = [1, 2, 3, 4, 5];
// let people = [
//     {
//         id: 1,
//         firstName: 'Lerato',
//         surname: 'Kganyago'
//     },
//     {
//     id: 2,
//     firstName: 'Kod',
//     surname: 'Album'
// }
// ];
// console.table(people);

// let peopleFirstName = people.map((item)=>{
//     return item.firstName;
// })
// console.log(peopleFirstName);
// let sum = numbers.reduce((a, b)=>{
//     return a + b;
// })
// console.log(`sum: ${sum}`);

//Mapping on array - allows you to modify the element within an array
// let double = numbers.map((item)=> {
//     return item * 2;
// })
// console.log("Current array: ", numbers);
// console.log("Double array: ", double);

//Hoisting is the ability to call your function on top of your function

// function addition(...args) {
// let sum = args.reduce((a, b)=>{
//     return a + b;
// }) 
// console.log(sum);
// console.log(args);
// }

// addition(1, 2, 3, 4, 5);

// function addition(...args) {
//     let sum = args.filter(Number).reduce((a, b)=>{
//         return a + b;
//     })
//     console.log("sum: ", sum);
//     console.log(args); } 

//Fetch API
// fetch('../data/data.json')
// .then((Response)=>{
//     return Response.json();
// })
// .then((data)=>{
//     let results = data.results
//    console.table(results);
// })

//async function

// async function fetchData(){
//     let data = await fetch('http://api.chucknorris.io/jokes/random')
//     return res.json();
// }
// async function display() {
//     let results = await fetchData();
// // }

// fetch('https://api.chucknorris.io/jokes/random')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     let tbody = document.querySelector('tbody');
//     Object.keys(data).forEach( (item)=>{
//         if(data[item].length){
//             console.log(`${item}: ${data[item]}`);
//             tbody.innerHTML +=
//             `
//                 <tr>
//                     <td>${item}</td>
//                     <td>${data[item]}</td>
//                 </tr>
//             `
//         }
//     } )
// })

//local storage

