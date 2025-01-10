const accountId = 144553
let accountEmail = "sushmaupadhayu12@gmail.com"
var accountPassword = "12345"
accountcity= "Butwal"
let accountState;  // if we don't declare the value then it will print as undefined

// accountId = 2 //not allowed because it is constant

accountEmail = "hc@hc.com"
accountPassword = "21423132"
accountCity = "Nepal"

/**
 * Prefer not to use var because of issue in block scope and functional scope
 */
console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])