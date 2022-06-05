// var smallerNumbersThanCurrent = function(nums) {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++){
//         let count = 0;
//         for (let j = 0; j < nums.length; j++){
//             if (nums[i] > nums[j]) count++;
//         }
//         arr.push(count);
//     }
//     return arr;
// };

// let count = 0;

// let counter = {
//     '1': 1,
//     '2': 2,
//     '3': 1,
//     '8': 1
// }

// let counter2 = {
//     '1': smalles ? 0 : count + counter[key],
//     '2': count + counter['1'],
//     '3': count + counter['2'],
//     '8': count + counter['3'],
// }


var balancedStringSplit = function(s) {
    let r = '';
    let l = '';
    let count = 0;
    for (let char of s){
        if (char === 'R'){
            r = 'R'
        }
        if (char === 'L'){
            l = 'L'
        }
        if (r === 'R' && l === 'L'){
            count++;
            r = '';
            l = '';
        }

    }
    return count;
};

console.log(balancedStringSplit("RLRRRLLRLL"))

