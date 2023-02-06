//get values from the page
//controller function where it starts
function getValues() {
    //get values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;
   


    //we need to validate input
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
         displayNumbers(numbers);

    }else{
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter ONLY integers!'
            }
        );
    }
}

//generate numbers from startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //we want to get all numbers from start to end -- LOOP

    for (let index = sValue; index <= eValue; index++) {
       //this will execute in a loop until index = eValue
       numbers.push(index);   
    }
   return numbers;
}

//display the numbers and mark even ones bold
//display or view function
function displayNumbers(numbers) {

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        
        let className = "";
        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        
    }
    document.getElementById('results').innerHTML = templateRows;
}