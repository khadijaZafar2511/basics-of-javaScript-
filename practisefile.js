
// basics of java script

// main difference between let and const in that 
// we cannot redefine variables in javascript as in c++  but using var we can redefine 
// using const we cannot change value of variable and even its types   but usin let and var we can change value and even its type
// imp // if we make arr const we change its elements but we cannot change its type like arr to float string etc

//arrays are mutable in javascript
// brr=[2,3,5,46,7];
// for (let i=0;i<=4;i++){
//     brr[i]*=2;                     //arr with for loop actuall change
//     console.log(brr[i]);
// }
// console.log(brr);

// brr=[8,6,8,9,6,5,5];
// for(let i of brr){
//     i*=2;                        //for of loop do not change acutall array
//     console.log(i);               // in both javascript and c++
// }                                  // and we cannot print index
// console.log(brr);
// brr=[2,4,67,8];
//  brr.forEach((ele,i, brr)=> {     // for each loop is also used for arrays
//     console.log(ele,i,brr);       //doesnot change actuall arry
    
//  });
//  console.log(brr);
 
 
// arr=[2,3,4,5,6];
// for (let idx in arr){ 
//     arr[idx]+=2            // for in loop can be used to arr elements with their ndes
//     console.log(idx,arr[idx]);    //it  change actual arr
// }
// console.log(arr); 

// falsy values  false conditions and, 0 ,false null,NaN, undefined if not given in double quotes
//truthy values everythinfg except falsy values

//string is a type of array and object
//we can use for ,forof ,for in loops to print strings but we cannot use foreach loop
// strings in javascript are immutable and all strings method return new strings
// let fullname ="khadija zafar ";
// for(let key in fullname){ 
//     console.log(key, fullname[key])
// }

//templete literals examples
//age=25; exp=4; console.log ("my  age is ${age} and my experience is ${exp}")
// console.log ( ` hello"world`); console.log("hello\"world");
 

//objects in javascript is like map/dictionary where we have key value pairs
// objects are mutable in javascript and basic sytax is 
// let obj={ 
//     fullName:"khadiaj zafar",
//     age:19,
// };
// // console.log( obj["age"]); console.log(obj.age);
// for (let key in obj){ 
//     console.log(key, obj[key]);              // for in loop is used for objects
// }

// math builtin functions //Math.abs(); Math.floor(); , Math.ceil, Math.min();, Math.max(); Math.power():
//we can pass any type of parameters in these functions 
 
//v.v.v imp  Math.random();  return  any random no between 0 and 1 and 0 and 1 are excluded


// console.log(Math.floor(Math.random()*21)-10);   // to generate no between -10 AND 10



// function getData (dataid,nextdata ){ 
//     setTimeout(()=>{ 
//         console.log("data",dataid);
//         if(nextdata)
//         nextdata(2);

//     }, 2000);
// };
// getData(1 , getData);


//1 to n printing with one second delay   some kind of timer
// for(let i=1 ;i<=10;i++){ 
//     setTimeout(()=>{ 
//         console.log(i);
//     }, i*1000);
// };

// arr=[2,2,3,4,];
// let brr=arr.forEach((ele)=>{ 
//     ele*=2;
//     console.log(ele);
// })
// console.log(brr);

//map functions


// let twice = (ele)=>{ 
//      return ele*ele;
// }
// let arr=[3,4,3,2,6];
// let brr=arr.map(twice);
// console.log(brr);

// other method
// let arr=[4,5,3,6,7,0];
// let brr =arr.map((ele)=>{ 
// return ele*ele;
// }
// console.log (brr);

// filter function
//  let arr=[2,4,3,6,7,8,9];
//  let brr = arr.filter((ele)=>{   // map and filter cannot change original arr to change current ARRAY we have to store changes/functions in it
//     return (ele%2==0);
//  });
//  console.log(brr);

// reduce function 
// let arr =[2,4,3,6,7,8,9];
// let x = arr.reduce ((a,b)=>{     // it actually reduce whole array to one value
//     return a+b;
// });
// console.log(x);
// 

// javascript lka buit i function ghalat sorting deta ha in case of negative no 
// isliay hm custom sorting use kartyha  for example 
//  let arr=[4,5,7,8,-9,5,-3,-2]; 
//  arr=arr.sort( (a,b)=>a-b);         increasing order
//  console.log(arr);             for decreasing order we b-a
//                        to sort ignoring sign we use math.abs 


// function hello(){ 
//     console.log("hello");     //hello is function reference
// }
// setTimeout(hello,2000);        // setTimeout function work with function reference .it can also use string instead of function reference but its not good practise



// callback function is an argument passed to an other function 
// outer function decides when when callback function is executed

//  function getData (dataid ,nextdata){ 
//     setTimeout(()=>{ 
//         console.log("data",dataid);
//         if(nextdata)
//         nextdata();
//                                       //here outer function get data will decide that call back function will be executed after 2second
//     }, 2000);
// };

// //callback Hell



// console.log("fetching data 1");
// getData(1,()=>{ 
//     console.log("fetching data 2");
//     getData(2, ()=>{
//         console.log("fetching data 3"); 
//         getData(3, ()=>{ 
//             console.log("fetching data 4");
//             getData(4,()=>{ 
//                 console.log("fetching data 5");
//                 getData(5)
//             });
//         });
//     });
// });


// javascript is synchronus programing but broweser provide asynchronus aproach by many fnctions like setTimeout api promise call backs etc
// asyncronus approach is reqiured  in web applications like instagram  e.g comments likes posts doesnot appers even if page is loading .it means that ui remains responsive while data is being loaded 
// callbacks promise chaining and async await functions are used to do asyncronus tasks in exact order e.g first user login then profile is shown then dashboard appears
// question arises in our mind that when javascript is syncronus by defalut why we use promise chaining and async await functions to do some tasks one after the other 
// answer is that if we donnt use term promise chaining , async awit then web pages would freeze .it means that when first task complete then other will be .if first task is not completed it blocks other task
//but if use promise chaining and async await function it do task one after the other but does not block anyone 

// let example of promise chaining 
// in promise chaining if we do task1 task2 task3 one after the other then we write some statements which are not included in promise chaining 
// in above promise chaining nxt task will wait untill first task is completed butt it does not block other statements which are not included in promise chaining 
// but javascript blocks all statements untill first one is executed 
// thats why we use aynchronus approach(callbacks , promise chaining , aync await) even to do some tasks in sequence


//  function getData ( dataid) {
//     setTimeout( ()=>{ 
//         console.log( " hello");
//         getData(2);
//     } , 2000);
// };
// getData(1);
// its is infinte function call to avoid this we use callback

//
// promise chain

// creating promise

// let promise=new Promise((resolve,reject)=>{ 
//     console.log("hello");
//     resolve("success");
// });

// let promise2=new Promise((resolve,reject)=>{ 
//     console.log("hello");
//     reject("some error ocurr");
// });

// same function as cal, back 

// function getData( dataid ){                  //, nextData
//     return new Promise( (resolve,reject)=>{
//         setTimeout( ()=>{ 
//         console.log( " hello");
//         resolve("data is fetched");
//         // if(nextData)
//         // nextData(2);
//     } , 5000);
//     });
// }
// getData(1, ()=>{           //it is use when we pass parameter nextdata
//     getData(2);
  
// });

// getData(1).then((res)=>{ 
//     getData(2).then((res=>{ 
//         getData(3);
//     }));

// });

// getData(1).then((res)=>{       //real promise chain
//     return getData(2) ;
// }).then((res)=>{ 
//     return getData(3)
// });