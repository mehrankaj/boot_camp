function tamrin1( ){
    for (let index1 = 2 ; index1 < 7002 ; index1=index1 + 2 ){
        console.log(index1);

    }
}
// tamrin1();

function tamrin2(){
    for (let index2 = 1 ; index2 < 10000 ; index2 = index2 + 2){
        console.log(index2);

    }



}
// tamrin2();
// mishe az 2k va 2k+1 ham raft

function tamrin1b(){
    for (let index1b = 1 ; index1b < 3501 ; index1b=index1b + 1 ){
        console.log(index1b * 2);

    }


}
// tamrin1b();

function tamrin2b(){
    for (let index2b = 0 ; index2b < 5000 ; index2b=index2b + 1 ){
        console.log((index2b * 2)+1);

    }


}
// tamrin2b();

function tamrin3(){
    var numbersArray=[ 1,13,22,123,49 ]
    let sum3 = 0
    for (let index3 = 0; index3 < numbersArray.length; index3++) {
    sum3 = sum3 + numbersArray[index3];
    
    
   }
   console.log(sum3);
}
// tamrin3();

function tamrin4(){
    var numbersArray=[ 1,13,22,123,49 ]
    for (let index4 = 0; index4 < numbersArray.length ; index4++) {
        delete numbersArray[index4];
    }
    console.log(numbersArray);


}
// tamrin4();

function tamrin5(){
    let number5 = 8
    for(let index5 = 0 ; index5 <= number5 ; index5++){
        let line = ""
        for(let index5a = 1 ; index5a <= index5 ; index5a++){
            line += index5a + " "
        }
    line=line.trim();
    console.log(line);
    }



}
// tamrin5();

 function tamrin6(){
    var numbersArray = [1,13,22,123,49];  
    var max = Math.max(...numbersArray);
    console.log(max);
 } 
// tamrin6();

function tamrin7(){
    var numbersArray = [1,13,22,123,49]; 
    var min = Math.min( ...numbersArray )
    console.log(min);
 }
// tamrin7();
 function tamrin9() {
    let str = "rahkar"
    let nstring = ""; 
    for(let index9 = str.length-1 ; index9 >= 0 ; index9 = index9 - 1 ){
        nstring = nstring + str[index9]

    }
console.log(nstring);
}
// tamrin9();

function tamrin10(){
    for(index10=1; index10 < 10 ; index10++){
        for(index10a = 1 ; index10a < 10 ; index10a++){
            console.log("" +(index10 * index10a) + " ");

        }
        
    }

}
tamrin10();




















