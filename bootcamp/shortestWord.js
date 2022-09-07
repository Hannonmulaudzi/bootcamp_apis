export default function shortestWord(sentence2){
    let wordString2=sentence2.split(" ")
   let result2 = wordString2[0];
   for(var i=0;i<wordString2.length;i++){
    let shortWord = wordString2[i];
    if(shortWord.length <= result2.length){
      result2 = shortWord;
   }
   }
    return result2;
   }