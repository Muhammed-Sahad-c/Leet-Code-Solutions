var minIncrementForUnique = function(nums) {
    let max=0
    let min=999999
    let arr= new Array(10**5 +1).fill(0)
    for(let x of nums){
        if(x<min)min=x
        if(x>max)max=x
        arr[x]++
    }
    let exp=min
    let cost=0
    for(let i=min;i<max+1;i++){
        for(let y=0;y<arr[i];y++){
            if(i>exp)exp=i+1
            else{
                cost+=(exp-i)
                exp++
            }
        }
    }
    return cost
};
