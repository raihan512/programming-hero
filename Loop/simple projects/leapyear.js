// const year = 2021;
// let remainder = year % 4;

// if(remainder==0){
//     console.log("Leap Year");
// }else{
//     console.log("not");
// }

function leapYear(year){
    if(year % 4 == 0 && year % 100 !=0 || year % 400 == 0){
        return("This is a leap year")
    }else{
        return("This is not a leap year");
    }
}

var chec20 = leapYear(2020);
console.log(chec20);

// let check20 = leapYear(2023);
// console.log(check20);