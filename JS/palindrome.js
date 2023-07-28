//parola utente
const userWord = prompt("inserisci una parola")

const palindromeWord = isPalindrome(userWord)

//verifica che la parola sia palindroma


function isPalindrome(userWord) {
    let reversePalindromeWord = ""

    for (let i = 0; i < userWord.length; i++){
    const letter = userWord[i]
    reversePalindromeWord = letter + reversePalindromeWord
    }

    if (userWord == reversePalindromeWord){
    return true
    }
    return false
}

if (palindromeWord){
    console.log(userWord, "è palindroma");
}
else {
    console.log(userWord, "non è palindroma");
}

