public with sharing class CalculationOfTwoNumbers {
    @AuraEnabled
    public static Integer getSum(Integer firstNum, Integer secondNum){
        return (firstNum + secondNum);
        
    }
    @AuraEnabled
    public static Integer getSubs(Integer firstNum, Integer secondNum){
        Integer subResult;
        /*if(firstNum > secondNum){
            subResult = firstNum - secondNum;
        }
        else if(secondNum > firstNum){
            subResult = secondNum - firstNum;
        }*/
        subResult = firstNum - secondNum;
        return subResult;
    }
    @AuraEnabled
    public static Integer getMultiplication(Integer firstNum, Integer secondNum){
        return(firstNum * secondNum);
    }
    @AuraEnabled
    public static Double getDivision(Double firstNum, Double secondNum){
        return(firstNum / secondNum);
    }
}
