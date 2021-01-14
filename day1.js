var arr= Array();
var x=0;
for(var i=0; ; i++){
    x=-1;
    x = prompt();
    if(x)
        arr[i] = x-'0';
    else break;
}

var size = arr.length;
function dec(a,b){
    return b-a;
}
function inc(a,b){
    return a-b;
}
arr.sort(inc);
function incSort(){   
    console.log("Up")
    for(var i =0; i<size;i++)console.log(arr[i]);
}
function decSort(){
    var desArr = Array();
    for(var i=0;i<size;i++){
        desArr[i] = arr[i];
    }
    desArr.sort(dec);
    console.log("Down")
    for(var i =0; i<size;i++)console.log(desArr[i]);
}
function maxNum(){
    console.log("Max");
    var max = arr.reduce(function(a,b){
    return Math.max(a,b);
    });
    console.log(max);
}
function minNum(){
    console.log("Min");
    var min = arr.reduce(function(a,b){
    return Math.min(a,b);
    });
    console.log(min);
}
var sum=0;
for(var i=0;i<size;i++)sum+=(arr[i]);
function Sum(){
    console.log("Sum");
    console.log(sum);
}
function median(){
    console.log("Median");
    var mid = size/2 ;
    mid = Math.floor(mid);
    console.log(arr[mid]);  
}
var mn = sum/size;
function mean(){
    console.log("Mean");
    console.log(mn);    
}
function stdev(){
    console.log("Stdev");
    var sm=0;
    for(var i=0;i<size;i++){
        sm=sm+ Math.abs(arr[i] - mn)*Math.abs(arr[i] - mn);
    }
    sm/=size;
    var stdev = Math.sqrt(sm);
    console.log(stdev);
}

