export default function() {
        return {
            name : '',
            message : '',
            greetMe(){
                this.message = greet(this.name)
            }, 
        }
    };