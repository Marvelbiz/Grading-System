var Name = document.getElementById("name");
var Result = document.getElementById("result");
var Score = document.getElementById("score");


function Check(){
    if(Score.value >= 70 && Score.value <=100){
        Result.innerHTML = Name.value+" You've Got A!"
     }
     else if(Score.value >=60 && Score.value <69){
        Result.innerHTML = Name.value+" You've Got B!"
     }
     else if(Score.value >=50 && Score.value <59){
        Result.innerHTML = Name.value+" You've Got C!"
     }
     else if(Score.value >=40 && Score.value <49){
        Result.innerHTML = Name.value+" You've Got D!"
     }
     else if(Score.value >100 || Score.value < 0){
        Result.innerHTML = Name.value+"  Enter a valid Score"
     }
     else if(Score.value === "" || Name.value === ""){
      Result.innerHTML = Name.value+" Input Your Score"
     } else{
        Result.innerHTML = Name.value+" You've Got F!"
     };
};
