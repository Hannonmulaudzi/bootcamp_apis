export default function enoughAirtime(projectedUsage, airtimeAvailable) {
    var call = 1.88;
    var data = 12;
    var sms = 0.75;
    let airtimeUsed = 0;
    var projectedAirtimeUsage = projectedUsage.split(',');
  
    for ( var i = 0; i < projectedAirtimeUsage.length; i++){
      if (projectedAirtimeUsage[i].startsWith('call')) {
        airtimeUsed += call;
      } else if (projectedAirtimeUsage[i].startsWith('sms')) {
        airtimeUsed += sms;
      } else if (projectedAirtimeUsage[i].startsWith('sms')) {
        airtimeUsed += data;
    }
  }
  
  const sum = (airtimeUsed > airtimeAvailable) ? 0 : airtimeAvailable - airtimeUsed;
  return 'R' + sum.toFixed(2);
  }