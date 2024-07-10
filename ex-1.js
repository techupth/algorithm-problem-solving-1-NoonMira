function twoSum(numbers, target) {
	let left = 0
	let right = -1

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
