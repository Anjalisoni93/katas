// Given a non-empty array of distinct integers and an integer representing a target sum, write a function that finds all triplets in the array that add up to the target sum and return a two-dimensional array containing the triplets. If no numbers can be found that add up to the target sum, return an empty array.

function threeNumberSum(arr, target) {
  arr.sort((a, b) => a - b);
	const result = [];
	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1;
		let right = arr.length - 1;
		while (left < right) {
			const currentSum = arr[i] + arr[left] + arr[right];
			if (currentSum === target) {
				result.push([arr[i], arr[left], arr[right]]);
				left++;
				right--;
			} else if (currentSum < target) {
				left++;
			} else if (currentSum > target) {
				right--;
			}
		}
	}
	return result; 
}

let arr = [12, 3, 1, 2, -6, 5, -8, 6];
let target = 0;
console.log(threeNumberSum(arr, target));
