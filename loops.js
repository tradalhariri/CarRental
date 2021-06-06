
var valid = true;
while(valid){
   var choosenMarket = prompt("Choose one from the following available markets : Mazda, Toyota, BMW");
    
   if(choosenMarket!="Mazda" && choosenMarket!="Toyota" && choosenMarket!="BMW" ){
       valid = true;
   }else{
       valid = false;
   }


}

var rating = prompt("What star rating would you give 1-5");

for (var i=0;i<rating;i++){
   document.write("<img src='https://img.pngio.com/star-golden-stars-png-download-734700-free-transparent-star-star-png-images-900_700.jpg'/>"+"<p style='color:red;'> Iteration "+(i+1)+"</p>") ;
   console.log(i);

}