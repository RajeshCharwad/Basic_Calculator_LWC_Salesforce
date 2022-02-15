import { LightningElement, track,api } from "lwc";
import getSum from "@salesforce/apex/CalculationOfTwoNumbers.getSum";
import getSubs from "@salesforce/apex/CalculationOfTwoNumbers.getSubs";
import getMultiplication from "@salesforce/apex/CalculationOfTwoNumbers.getMultiplication";
import getDivision from "@salesforce/apex/CalculationOfTwoNumbers.getDivision";
export default class passingParameters extends LightningElement{
    @track firstNumber;
    @track secondNumber;
    @track sumResult;
    @track err;
    @api title;
    @api greeting;

    handleClick(event){
        console.log('Inside handleclick');
        console.log(event.target.value);
        if(event.target.name === 'add'){
            console.log('Inside + if');
            getSum({firstNum : this.firstNumber, secondNum : this.secondNumber})

            .then(result=>{
                this.sumResult = result;
            })

            .catch(error=>{
                this.err = error;
            });
        }
        else if(event.target.name === 'sub'){
            console.log('Inside - if');
            getSubs({firstNum : this.firstNumber, secondNum : this.secondNumber})

            .then(result=>{
                this.sumResult = result
            })

            .catch(error=>{
                this.err = error;
            });
        }
        else if(event.target.name === 'multi'){
            getMultiplication({firstNum : this.firstNumber, secondNum : this.secondNumber})

            .then(result=>{
                this.sumResult = result;
            })

            .catch(error=>{
                this.err = error;
            });
        }
        else if(event.target.name === 'div'){
            getDivision({firstNum : this.firstNumber, secondNum : this.secondNumber})

            .then(result=>{
                this.sumResult = result
            })

            .catch(error=>{
                this.err = error
            });
        }

    }

    handleChange(event){
        console.log('Inside handlechange');
        if(event.target.name === 'fstNumber'){
            this.firstNumber = event.target.value;
        }
        else if(event.target.name === 'sndNumber'){
            this.secondNumber = event.target.value;
        }
    }
}