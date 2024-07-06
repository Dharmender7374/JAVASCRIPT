const accountID = 12345
let accountEmail = "dharmender1383@gmail.com"
var accountpassword = "73732001"
accountCity = "jaipur"
let accountState;

console.log(accountID);

accountEmail = "dharm123@.com"
accountpassword = "20011383"
accountCity = "Delhi"

//accountID = 2  // not allowed
console.table([accountEmail,accountpassword,accountCity,accountID,accountState])
/*
prefer not to use var because of issue in block scope and functional scope
*/