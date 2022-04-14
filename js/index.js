var state;
var operation1;
var operation2;
var result;
var operationMain;


let calculator = {
    numberArray : new Array(),
    
    starting : function(){
        state='starting';
        this.display();
    },
    
    addition : function () {
        operationMain = 'addition';
        state='operating2';
        this.numberArray=[]; /*Ao final de cada operationMain eu tenho que limpar o numero array para o proximo operando*/
    },
    
    subtraction : function(){
        operationMain = 'subtraction';
        state='operating2';
        this.numberArray=[]; /*Ao final de cada operationMain eu tenho que limpar o numero array para o proximo operando*/
    },
    
    division : function (){
        operationMain = 'division';
        state='operating2';
        this.numberArray=[]; /*Ao final de cada operationMain eu tenho que limpar o numero array para o proximo operando*/
    },
    
    multiplication : function (){
        operationMain = 'multiplication';
        state='operating2';
        this.numberArray=[]; /*Ao final de cada operationMain eu tenho que limpar o numero array para o proximo operando*/
    },

    ac : function(){
        calculator.starting();
        this.numberArray=[];
    },
    
    del : function(){
        this.numberArray.pop();
        this.nextNumber();
        this.display();
    },
    
    equal : function(){
        switch (operationMain){
            
            case 'addition':
            result = operation1+operation2;
            state ='result';
            this.display();
            break;

            case 'subtraction':
            result = operation1-operation2;
            state ='result';
            this.display();
            break;

            case 'division':
            result = operation1/operation2;
            state ='result'
            this.display();
            break;

            case 'multiplication':
            result = operation1*operation2;
            state ='result'
            this.display();
            break;
            
        }
            
    },
    display : function (){
        switch (state){

            case'starting':
                document.getElementById("display").innerText = 'Display';
                state='operathing1';
                break;

            case 'operathing1':
                document.getElementById("display").innerText = operation1;
                break;
            
            case 'operating2':
                document.getElementById("display").innerText = operation2;
                break;
            
            case 'result':
                document.getElementById("display").innerText = result;
                state='operathing1';
                break;
        }

    },
  
    
    nextNumber: function(digit){
                    switch (state){
                        case'operathing1':
                            this.numberArray.push(digit);
                            operation1=parseFloat(this.numberArray.join(''));
                            this.display();
                            break
                        case 'operating2':
                            this.numberArray.push(digit);
                            operation2=parseFloat(this.numberArray.join(''));
                            this.display();
                            break
                    }


    },

}