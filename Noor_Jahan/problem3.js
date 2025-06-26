function printOddSeries(a) {
  if(a%2==0){
    a=a-1; 
  }
  for(let i=1;i<=a*2;i+=2){
    console.log(i);
  }
}
printOddSeries(5); 
