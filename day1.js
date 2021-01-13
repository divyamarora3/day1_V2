var arr = [10 ,1, 9, 2, 8 ,3, 7, 4, 6];
var size = 9;
//var x = prompt();
//console.log(x);
function dec(a,b){
    return b-a;
}
function inc(a,b){
    return a-b;
}
arr.sort(inc);
console.log("Up")
for(var i =0; i<size;i++)console.log(arr[i]);
arr.sort(dec);
console.log("Down")
for(var i =0; i<size;i++)console.log(arr[i]);
console.log("Max");
var max = arr.reduce(function(a,b){
    return Math.max(a,b);
});
console.log(max);
console.log("Min");
var min = arr.reduce(function(a,b){
    return Math.min(a,b);
});
console.log(min);
console.log("Sum");
var sum=0;
for(var i=0;i<size;i++)sum+=arr[i];
console.log(sum);
console.log("Median");
var mid = size/2 ;
mid = Math.floor(mid);
arr.sort(inc);
console.log(arr[mid]);  
console.log("Mean");
var mean = sum/size;
console.log(mean);
console.log("Stdev");
var sm=0;
for(var i=0;i<size;i++){
    sm=sm+ Math.abs(arr[i] - mean)*Math.abs(arr[i] - mean);
}
sm/=size;
var stdev = Math.sqrt(sm);
console.log(stdev);
