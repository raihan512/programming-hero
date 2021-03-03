// var num =80;

// switch(num){
//     case 10: console.log("10");
//     break;

//     case 30: console.log("10");
//     break;

//     case 50: console.log("10");
//     break;

//     case 70: console.log("10");
//     break;

//     case 80: console.log("80");
//     break;

//     default: console.log("Hello world");
// }

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}