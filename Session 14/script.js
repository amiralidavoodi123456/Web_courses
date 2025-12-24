var numbers = [1, 2, 3];


function avg(nums) {
    var a = 0;
    for (var i = 0; i <numbers.length; i++) {
         a = a + nums[i]
    }
    return a / nums.length
}
console.log(avg(numbers));