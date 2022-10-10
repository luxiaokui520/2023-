//let s = readline().split('')
let s = '011010000101101'
let stack  =[]
let temp = []
for(let i = 0;i<s.length;i++){
    if(s[i] === '1')
        stack.push(s[i])
    else{
        if(stack.pop() === '1'){
            temp.push(i)
        }
    }
}
let max = 0
let another = []
let i = 0;
if(temp.length === 1){
    max = 2;
}
console.log(temp)
while(i<temp.length - 1){
    let j  = i+1
    while(temp[j] - temp[j -1] === 1 && j< temp.length){
        j++;
    }
    if(j-1!==i){
        for(let k = i;k<j;k++){
            another.push(temp[k] - (j - i))
        }
    }else{
        another.push(temp[j] - 1)
        another.push(temp[i] - 1)
    }
    i = j; 
}
let arr = [...temp, ...another]
arr.sort()
console.log(arr)
i  = 0;
while(i<arr.length - 1){
    let j  = i + 1
    let ans = 1;
    while(arr[j] - arr[j -1] === 1 && j< arr.length ){
        j++;
        ans++;
    }
    if(ans > max){
        max = ans
    }
    i=j; 
}
console.log(max)
