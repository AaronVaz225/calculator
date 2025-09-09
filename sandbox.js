const exampleArray = [10, "/", 2]; 
let total = 0;




for (let i = 0; i < exampleArray.length; i++) {
    if (typeof exampleArray[i] !== "number") {

        switch (exampleArray[i]) {
            case "+" :
                total = exampleArray[i - 1] + exampleArray[i + 1];
                break;
            case "-" :
                total = exampleArray[i - 1] - exampleArray[i + 1];
                break;
            case "*" :
                total = exampleArray[i - 1] * exampleArray[i + 1];
                break;
            case "/" :
                total = exampleArray[i - 1] / exampleArray[i + 1];
                break;

        }

        console.log(total)
    } 


}

