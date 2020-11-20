let arr=[
    {
        name:"Arsenal",
        points:99,
        GD:45
    },
    {
        name:"Chelsea",
        points:75,
        GD:39
    },
    {
        name:"Machester United",
        points:60,
        GD:29
    },
    {
        name:"Liverpool",
        points:88,
        GD:39
    }
]

let temp
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i].points<arr[j].points){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

for(let i=0;i<arr.length;i++){
    arr[i].position=i+1;

}

console.log(arr);


