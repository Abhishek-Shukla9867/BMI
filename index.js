
function Calculate(){
    let H = document.getElementById("Height").value;
    let W = document.getElementById("Weight").value;
    let  bmi =(W/((H/100)*(H/100))).toFixed(2);

    let result =  "Your BMI is " + bmi;

    if (bmi<18.5 ) {
        result += "(underweight)";
    }
        else if(bmi>18.5 && bmi<25)
        {
        result += "(Normal weight)";
        }
        
        else if(bmi>=25 && bmi<30)
        {
        result += "(Over weight)";
        }
        else {
            result += "(Obese)";
        }

        document.getElementById("x").innerText=result;

    
}

