
var optionNames = "ABC";
for(var i = 0; i < optionNames.length; i++){
    var option = document.createElement("input");//creates the input 
    option.type = "radio";//defines the type of input
    option.value = optionNames.charAt(i);//assigns the value of each option to A, B, C
    option.name = "choice";//assigns the inputs to a group called name
    document.body.append(option);
    document.body.append(optionNames.charAt(i));//Adds A, B, C text to page
    var lineBreak = document.createElement("br");
    document.body.append(lineBreak); 
}

//creates the button
var submitButton = document.createElement("button");
submitButton.innerHTML = "submit";
submitButton.addEventListener("click", getValue);
document.body.append(submitButton)


function getValue(){
    //gets all the options as an array
    var options = document.getElementsByName("choice");
    //finds the option that is checked and returns the value
    for(var i = 0; i < options.length; i++){
        if(options[i].checked){
            console.log(options[i].value)
            return options[i].value;
        }
    }
}