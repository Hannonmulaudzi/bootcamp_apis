export default function(){

    return{
    airtimeUsage : '',
    availableAmount : '0.00',
    airtimeMessage : '',
    calculate () {
        this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.availableAmount)
    }
    }
}


    function newFunction() {
        return 'enoughAirtimeWidget';
    }