function isSameLength(w1, w2){
    let word1 = w1.length;
    let word2 = w2.length;
    if(word1 == word2){
        return true;
    }
    else{
        return false;
    }
}

console.log(isSameLength("Hello", "Hi"));