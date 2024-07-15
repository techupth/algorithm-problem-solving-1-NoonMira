function twoSum(numbers, target) {
	let left = 0;
	let right = numbers.length - 1

	while (left < right){
		sum = numbers[left]+ numbers[right]
	if(sum == target){
		return [left,right]
	} else if(target> sum){
		left++
	}else{
		right --
	}
}
return []
};
const numbers = [2, 7, 11, 15];
const target = 9;
const result = twoSum(numbers, target);
console.log(result);
