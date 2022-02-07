

function generatePassword(includeNumbers, includeCharacters, length){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabet_upper = alphabet.toUpperCase();
    let numbers = "0123456789";
    let characters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";    
    let arr = [];

    arr = arr.concat(alphabet.split(""), alphabet_upper.split(""));
    if(includeNumbers){
        arr = arr.concat(numbers.split(""));
    }
    
    if(includeCharacters){
        arr = arr.concat(characters.split(""));
    }

    for(let i = 0; i < length; i++){
      password += arr[Math.floor(Math.random() * arr.length)];
    }
    return password;
}


export { generatePassword };
