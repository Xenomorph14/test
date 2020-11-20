let removeDuplicate=(arr1=[],arr2=[])=>{
    arr1New=[...new Set(arr1)]
    arr2New=[...new Set(arr2)]
    finalArray=[];
    for(let i=0;i<arr1New.length;i++){
        for(let j=0;j<arr2New.length;j++){
            if(arr1New.indexOf(arr2New[j])==0){
                arr1New.splice(i,1)
                arr2New.splice(j,1)
            }           
        }
    }

    return arr1New.concat(arr2New);
}

console.log(removeDuplicate([1,2,"a"],[1,3,"b"]));
