const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator tool\nPlease input a password to validate: ", function(input){
	let tokens = input.split(' ');
    const password = tokens[0];
    const bad =  `
    ██████   █████  ██████      ██████   █████  ███████ ███████ ██     ██  ██████  ██████  ██████  
    ██   ██ ██   ██ ██   ██     ██   ██ ██   ██ ██      ██      ██     ██ ██    ██ ██   ██ ██   ██ 
    ██████  ███████ ██   ██     ██████  ███████ ███████ ███████ ██  █  ██ ██    ██ ██████  ██   ██ 
    ██   ██ ██   ██ ██   ██     ██      ██   ██      ██      ██ ██ ███ ██ ██    ██ ██   ██ ██   ██ 
    ██████  ██   ██ ██████      ██      ██   ██ ███████ ███████  ███ ███   ██████  ██   ██ ██████  `;
    
    
    const good = `
     ██████   ██████   ██████  ██████      ██████   █████  ███████ ███████ ██     ██  ██████  ██████  ██████  
    ██       ██    ██ ██    ██ ██   ██     ██   ██ ██   ██ ██      ██      ██     ██ ██    ██ ██   ██ ██   ██ 
    ██   ███ ██    ██ ██    ██ ██   ██     ██████  ███████ ███████ ███████ ██  █  ██ ██    ██ ██████  ██   ██ 
    ██    ██ ██    ██ ██    ██ ██   ██     ██      ██   ██      ██      ██ ██ ███ ██ ██    ██ ██   ██ ██   ██ 
     ██████   ██████   ██████  ██████      ██      ██   ██ ███████ ███████  ███ ███   ██████  ██   ██ ██████  `;
    
    let message = bad;

    const regex = /^(.{0,10}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
    // Check to see if the characters are less than ten
    // Check to see that it does not have a number
    // Check to see that it does not have a upper case char
    // Check to see that it does not have a lower case char
    // Check to see that it does not have a special char

    // If any of that matches then it is an invalid password
    // so we NOT the regex.test to make sure that the password is valid
    if (!regex.test(password)) {
        message = good;
    }
  
    console.log(message);
    reader.close();
});


