function verificaPalindrome(string) {
    let splitString = string.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    
    if (string == joinArray) {
    return true;
    } else {
        return false;
    }
}



console.log(verificaPalindrome('arara'));

