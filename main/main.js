'use strict';

function fizzBuzzWhizz(num) {
  var strs="";
  var numstr=num.toString();
  //判断是否包含3,如果包含，直接返回
  for(var i=0;i<numstr.length;i++){
    if(numstr[i]==='3'){
      return 'fizz';
    }
  }
  if(num%3==0){
    strs+='fizz';
  }
  if(num%5==0){
          strs+='buzz';
  }
  if(num%7==0){
          strs+='whizz';
  }
  if(num%3!=0&&num%5!=0&&num%7!=0){
    return num;
  }
  return strs;
}
for(var i=1;i<110;i++)
{
  var s=fizzBuzzWhizz(i);
  console.log(s);
}
