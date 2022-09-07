export default function longestWord(sentence){
    let wordString=sentence.split(" ")
   let result = wordString[0];
   for(var i=0;i<wordString.length;i++){
    let longestStr = wordString[i]
    if(longestStr.length>=result.length){
      result = longestStr;
   }
   }
   return result; 
};