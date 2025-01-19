// Find the second smallest number in the array or bubble sort
var arr = [8,9,2,5,1,3,7]

for(let i = 0;i < arr.length -1;i++){
   for(let j=0; j < arr.length -i -1;j++){
       console.log(arr[j], arr[j+1],arr[j] > arr[j+1])
      if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp
          console.log(arr);
      }
   }
}
console.log(arr);