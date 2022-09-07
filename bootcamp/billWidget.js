export default function() {
    return{
        item : '',
        message : '',
        totalBill(){
            this.message = totalPhoneBill(this.item)
        }, 
    }
}