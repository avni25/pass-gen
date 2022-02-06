function generatePassword(){
    let length = 8;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabet_upper = alphabet.toUpperCase();
    let numbers = "0123456789";
    let characters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";    
    let arr = [];

    arr = arr.concat(alphabet.split(""), alphabet_upper.split(""));
    if(true){
        arr = arr.concat(numbers.split(""));
    }
    
    if(true){
        arr = arr.concat(characters.split(""));
    }

    for(let i = 0; i < length; i++){
      password += arr[Math.floor(Math.random() * arr.length)];
    }
    return password;
}


  console.log(generatePassword());


