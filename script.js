
// Printing a joined or concatenated sentence
console.log('My name is ' + 'Awe Jacob ' + 'Am learning web development');


// Finding or Acessing the length of strings
console.log('Awe Jacob'.length);


//  Acessing the index of string characters=>log('hi there' [index])

console.log('hi there'[5]);


// how to print strings in javascript

console.log('Awe Jacob');


                        VARIABLE
    // declaring variables                    
   let num = 15000000
   console.log(num);

   let person = 'Awe Jacob'

   console.log(person);

//    declaring two variables at a time

let firstName = 'John'
 let lastName = 'Doe'

 console.log(firstName, lastName);

//  constant variables

let name = 'Doe'

 name = 'Jason'
console.log(name);

                    //  Exercise on strings and Variables

let celsius = 30

// formula to convert celsius to fahrenheit =>  F = C *1.8 + 32



                //    EQUALITY OPERATORS
  let bool ='1' != 1
  console.log(bool);   
  
  let poultry = 'hens' =='hen'

  console.log(poultry);


                // CONDITIONALS
let subscribed = false    

if(subscribed){
    console.log('show the video');
} 
else{
    console.log('log in to view the video');
}


let cash1 = 49

if(cash1 >= 50){
    console.log('show the balls');
}  else{
   console.log( 'cash is less than 50');
} 


let username = true

let password = true

///////////// 1 //////////////
if(username && password === true){
    console.log('account loggedIn successfully');
} 


//////////////// 2 /////////////////
else if(username && password === false){
    console.log('invalid password or username');
}

else if(username === false && password === true){
    console.log('invalid username');
}

else if (username === true && password === false){
    console.log('incorrect password');
}


///////////////// 3 /////////////
else{
    console.log('create an account');
}


// Step 1: Write a for-loop that loops through 1 to 20
for (let i = 1; i <= 20; i++) {
    // Step 2: If the number is divisible by 3, print "Code"
    if (i % 3 === 0) {
      console.log("Code");
    } 
    // Step 3: If the number is divisible by 5, print "Coast"
    else if (i % 5 === 0) {
      console.log("Coast");
    } 
    // Step 4: If the number is divisible by 3 and 5, print "Code Coast"
    else if (i % 3 === 0 && i % 5 === 0) {
      console.log("Code Coast");
    } 
    // Step 5: If the number is not divisible by either 3 or 5, print the number
    else {
      console.log(i);
    }
  }

let cash = 30;

let price = 40

let isStoreOpen = true


 if(cash >=price || isStoreOpen){
    console.log('product purchased successfully');
// }
// else if(cash < price && isStoreOpen){
//     console.log('sorry you have insufficient funds');
// }
 }
else{
    console.log('sorry shop is closed');
}
  
let user = password && username ? 'login successful' : 'login failed ! incorrect password or username'

console.log(user);

if(password && username === true){
    console.log('login successful');
} else{
    console.log('incorrect password or username');

 let user = password && username ? 'login successful' : 'login failed'}

console.log(user);


// 1. print> weather is too hot 
// 2. print > weather is cold

if(hot === true){
    console.log('weather is too hot ');
} 

else{
    console.log('weather is cold');
}

let temperature = hot ? 'weather is too hot' : 'weather is cold'

console.log(temperature);

let number = 1

while(number <= 100){
    console.log(number +1);
    
}

for(let i =0; i <= 10; i++){
    console.log(i);
}


///////////////////////// FUNCTIONS///////////////////////////////






