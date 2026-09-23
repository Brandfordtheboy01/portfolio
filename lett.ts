function isPalindrome(x: number): boolean {

    const original = x.toString();
    const reversed = original.split("").reverse().join("")
    return original === reversed;
};


isPalindrome(121)