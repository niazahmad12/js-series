const accountId=123456
let accountEmail="niazahmad12@gmail.com"
var accountPassword="12345"
accountCity="Lahore"
let accountState; // if value not assign then default is 'undefined'

// accountId=22 const variables can't cahnge value its not allowed

console.log(accountId);
accountEmail="niazahmad1@hotmail.com"
accountPassword="222"
accountCity="Karachi"

// console.log(accountEmail);

/*
In javascript there are two methods to define variables
1- const
2- let

Note: in old age use var but there is problem of scope in var e.g {} let suppose we define
var username='abc' but somewhere define same vaiables in other place like var username='xyz' then
 value of old varaible change the rectify this issue js team introdude new method let to define variables
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity ,accountState])