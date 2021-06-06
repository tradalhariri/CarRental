
validateUserInput();

function validateUserInput(){
    var valid = true;

    while(valid){
        var choosenMarket = prompt("Choose one from the following available markets : Mazda, Toyota, BMW");
         
        if(choosenMarket!="Mazda" && choosenMarket!="Toyota" && choosenMarket!="BMW" ){
            valid = true;
        }else{
            valid = false;
            return;
        }
     
     
     }

}


var ratingStarsNum = prompt("What star rating would you give 1-5");

var rating = function(rating){


for (var i=0;i<rating;i++){
   document.write("<img src='https://zuroskicon.com/wp-content/uploads/2016/08/starcarnow-1.gif'/>"+"<p style='color:red;'> Iteration "+(i+1)+"</p>") ;
   console.log(i);
}

}

rating(ratingStarsNum);

