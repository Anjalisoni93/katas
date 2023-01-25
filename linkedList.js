var addTwoNumbers = function(l1, l2) {
    const reverseL1 = l1.reverse().join("");
    const reverseL2 = l2.reverse().join("");

    const sum = Number(reverseL1) + Number(reverseL2);

    return sum.toString().split("").reverse();
    
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));