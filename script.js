let images = ["dice-1-md.png",
"dice-2-md.png",
"dice-3-md.png",
"dice-4-md.png",
"dice-5-md.png",
"dice-6-md.png"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        // document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
        document.querySelector("#total1").innerHTML = ">>ผู้เล่น 1 ได้ " + ( (dieOneValue +1) + "เเต้ม" );
        document.querySelector("#total2").innerHTML = ">>ผู้เล่น 2 ได้ "  + (  (dieTwoValue + 1) + "เเต้ม" );

        if(dieOneValue > dieTwoValue){
            document.querySelector("#total").innerHTML =(">>ผู้เล่น 1 ชนะ👨🏻‍🦱<<");
        }
        else if(dieOneValue < dieTwoValue){
            document.querySelector("#total").innerHTML =(">>ผู้เล่น 2 ชนะ👦🏻<<");
        }
        else{
            document.querySelector("#total").innerHTML =(">>ผู้เล่นทั้งสอง เสมอกัน🤜🏻🤛🏻<<");
        }
    },
    1000
    );
}
roll();
