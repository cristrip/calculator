
const disp=document.getElementById('display');
function info_but(){
 alert('informations')
}
// the fuctorial function
function number(){
    var uname=document.getElementById("display").value;   
if (uname < 0) {
    alert('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (uname === 0) {
    display.value ='';
    display.value ='1';
}

// if number is positive
else if (uname > 0) {
    let fact = 1;
    for (i = 1; i <= uname; i++) {
        fact *= i;
    }
    display.value ='';
    display.value +=fact;
}
}
