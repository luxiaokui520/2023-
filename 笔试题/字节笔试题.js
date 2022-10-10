let n  = 5;
let arr = [
    [5, 0, 1000, 2000, 3010, 3200], 
    [4, 40, 1050, 2049, 3100],
    [1, 80],
    [1, 120],
    [1, 160],
]
console.log(number(n, arr))



function number(n, arr){
    var sum = arr[0][0];
    var ans = 0;
    for(let i = 1;i<n;i++){
        let m = arr[i][0];
        sum += m;
        let j  =1;
        let k  =1;
        while(j <= arr[i].length - 1  && k <= arr[i-1].length - 1 ){
            while(((arr[i][j] + 100 )<= arr[i-1][k]) && j <= arr[i].length - 1 ){
                j++;
            }
            while((arr[i][j] >= arr[i-1][k] + 100) &&  k <= arr[i-1].length - 1 ){
                k++;
            }
            if((arr[i][j] < arr[i-1][k] + 50) || (arr[i][j] + 100 > arr[i-1][k] + 50)) {
                ans ++;
            }else if((arr[i][j] > arr[i-1][k] + 50) && (arr[i-1][k+1] + 50 > arr[i][j] + 100))
                ans ++;
            else {
                arr = upNumber(arr[i][j], i, n, arr)
            }
            j++
        }
        
    }
    return ans - 2 + arr[0][0];
}

function upNumber(left,x, n, arr){
    for(let  i= x+1;i<n;i++){
        let j = 1;
        let m  =arr[i][0];
        while(arr[i][j] + 100 <= left){
            j++;
        }
        if(arr[i][j] < left  + 100 ){
            upNumber(arr[i][j], i, n, arr)
            arr.splice(j, 1)
        }else {
            break;
        }
    }
    return arr
}