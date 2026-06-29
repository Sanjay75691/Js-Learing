const accountId = 223344;
let accountEmail = "sanjay.sharma@gmail.com";
let accountPassword = "1234";
let accountCity = "Bengaluru";

// accountId = 124345; // Not allowed

accountEmail = "baman@gmail.com";
accountPassword = "6655";
accountCity = "Jaipur";

console.log(accountId);

/*  ignore or avoide use or var
    beacause of block scope or functional scope
*/

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity
]);