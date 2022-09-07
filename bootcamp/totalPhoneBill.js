var string = 'call, sms, call, sms, sms';
export default function totalPhoneBill(string)
{
  let counter1 = 0;
  let counter2 = 0;
  const total = string.split(",");
  for( var i = 0; i < total.length; i++)
  {
    const newS = total[i].trim();
    if(newS.startsWith("c"))
    {
      counter1 ++;
    }
    else if(newS.startsWith("s"))
    {
       counter2 ++;
    }
  }
  return 'R'+ (counter1*2.75 + counter2*0.65).toFixed(2);
}
let result = totalPhoneBill(string);
console.log(result);