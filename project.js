const list = [];
var sum = 0;




function calcFunction(){
    const input1 = Number(document.querySelector("#num1").value);
    const input2 = Number(document.querySelector("#num2").value);
    const input3 = document.querySelector("#option").value;
    const answer = document.querySelector("#answer");
   if(input3 ==='+'){
    answer.innerHTML=input1+input2;
    //console.log(input1+input2);
   }
   else if(input3 ==='-'){
    answer.innerHTML=input1-input2;
    //console.log(input1-input2);
   }
   else if(input3 ==='*'){
    answer.innerHTML=input1*input2;
    //console.log(input1*input2);
   }
   else if(input3 ==='/'){
    answer.innerHTML=input1/input2;
    //console.log(input1/input2);
   }
   else if(input3 ==='%'){
    answer.innerHTML=input1%input2;
    //console.log(input1%input2);
   }

};




function addNumber() {
    const statNum = Number(document.querySelector("#statnum").value);
    list.push(statNum);
    const lis = document.querySelector("#list");
    lis.innerHTML=list.join(',');
    

    console.log(list);
}

function staticFunction() {
    const val = document.querySelector("#option2").value;
    const ans =  document.querySelector("#answer2");
    let sum = 0;

    list.forEach((value) => {
        sum += value;
    });

    if (val === 'mean') {
        let mean = sum / list.length;
        ans.innerHTML='Mean: ' + mean.toFixed(2);
        
    } 
    else if (val === 'median') {
        list.sort((a, b) => a - b);
        let median = (list.length % 2 === 0) 
            ? (list[list.length / 2 - 1] + list[list.length / 2]) / 2 
            : list[Math.floor(list.length / 2)];
            ans.innerHTML='median :'+median.toFixed(2);
        
    } 
    else if (val === 'mode') {
        let modeMap = {};
        let maxFrequency = 0;
        let mode = [];

        list.forEach((value) => {
            if (modeMap[value]) {
                modeMap[value]++;
            } else {
                modeMap[value] = 1;
            }
            if (modeMap[value] > maxFrequency) {
                maxFrequency = modeMap[value];
                mode = [value];
            } else if (modeMap[value] === maxFrequency) {
                mode.push(value);
            }
        });

        ans.innerHTML='mode: '+mode.join('');
    } 
    else if (val === 'varience') {
        let mean = sum / list.length;
        let variance = list.reduce((acc, value) => acc + Math.pow(value - mean, 2), 0) / list.length;
        ans.innerHTML='Variance :'+variance.toFixed(2);
    }
}

 









