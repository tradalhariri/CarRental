var fCar = prompt("Enter you favorite car");

alert("Your favorite car is " + fCar);

document.write("<h2 style='color:#ff0000ee;'> Your favorite car is "+ fCar+ "</h2>");
document.write("<button onclick='okOrCancle()'> Try  </button>");
var expectdPrice = prompt("Enter the price you expect");

if(expectdPrice >= 1000){
    alert("You are Welcome");
}else{
    alert("we are sorry");
}

function okOrCancle(){
    var ok = confirm("Press a button");
    if(ok == true){
        alert("you pressed Ok");
    }else{
        alert("you pressed Cancle");  
    }
}