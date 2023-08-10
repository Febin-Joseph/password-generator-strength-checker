const { getPasswordStrength } = require('./strong-password-check');

password = "9!abHidfg"

const config = {
  lowercase: true,
  uppercase: true,
  digits: true,
  specialChars: true,
  minLength: 8,
};

// Get password strength
const result = getPasswordStrength(password, config);
console.log(result);

// { messages: [], strength: 'Strong', suggestion: '' } 

//suggestion will give a random generated password if the user entered password is not strong.
//otherwise it wont shows the suggested password.
// Example output of suggestion: 'XyZ@1234'
