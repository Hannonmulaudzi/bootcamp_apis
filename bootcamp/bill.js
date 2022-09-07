export default function totalPhoneBill(item) {
    let count = 0;
    var newItem = item.split(",");
    for (var i=0; i<newItem.length; i++){
      var currentItem = newItem[i].trim();
      if (currentItem.startsWith("s")){
        count += 0.65;
      }else{
        count += 2.75; 
      }
    }
    return "R"+count.toFixed(2);
    
  }