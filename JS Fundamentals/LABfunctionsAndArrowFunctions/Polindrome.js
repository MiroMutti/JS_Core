function polindrome(a) {
    let reversed = a.split('').reverse().join("")
    return reversed !== a ? false : true;
}