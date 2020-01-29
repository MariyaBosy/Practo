let a = [1, 2, 3, 2, 4];
let len = a.length;
let checker = 0;
(function palindrome(arr, n) {

    
    for (let i = 0, j = len / 2; i < j; i++) {
        if (a[i] !== a[len - i - 1]) {
            checker = 1;
            break;
        }
    }
})(a,len);

if(checker === 1) {
    console.log("The array is not palindrome")
}
else {
    console.log("The array is palindrome")
}