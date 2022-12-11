function largestNum(arr)
{
    // Stores the array elements
        let set = new Set();
  
        // Initialize a variable res as
        // 0 to store maximum element
        // while traversing the array
        let res = 0;
  
        // Iterate through array arr
        for (let i = 0;
             i < arr.length; i++) {
  
            // Add the current element
            // into the set
            set.add(arr[i]);
  
            // Check if the negative of
            // this element is also
            // present in the set or not
            if (set.has(-1 * arr[i])) {
  
                res = Math.max(
                    res, Math.abs(arr[i]));
            }
        }
  
        // Return the resultant element
        return res == 0 ? -1 : res;
}
 
// Drive Code
let arr= [-6, -91, 1011, -100, 84, -22, 0, 1, 473];
console.log(largestNum(arr));
 