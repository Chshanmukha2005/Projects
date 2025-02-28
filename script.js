
const inpu = document.getElementById("in");

function appendValue(ele){
    let para = ele;
    inpu.value += ele;
}


function clearValue(){
    inpu.value = '';
}

function calculate()
{
    try{
        inpu.value = eval(inpu.value);
    }
    catch{
        window.alert("Enter correct input")
    }
}