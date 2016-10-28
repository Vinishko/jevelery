var a=2;
var k =4;
var n = 6;
var summa = 0;
for(var i = a;i<=k;i++){
    var temp=1;
    for(var j = i; j<=n;j++){
        temp*=Math.pow(i,j);
    }
    summa+=temp;
}
alert(summa);