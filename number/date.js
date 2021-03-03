var today = new Date();
var dd = today.getDay();
var mm = today.getMonth();
var year = today.getFullYear();


switch(dd){
    case 0:
        console.log("Sunday");
        break;
        case 1:
            console.log("Monday");
            break;

            case 2:
        console.log("Tuesday");
        break;

        case 3:
        console.log("Wednesday");
        break;

        case 4:
        console.log("Thursday");
        break;

        case 5:
        console.log("Friday");
        break;

        case 6:
        console.log("Saturday");
        break;

        default:
         console.log("HHH");
}

switch (mm) {
    case 0:
      console.log("january");
      break;
    case 1:
        console.log("February");
      break;
      case 2:
        console.log("March");
      break;
      case 3:
        console.log("April");
      break;
    default:
      text = "No value found";
  }
console.log(year  + '-' + mm + '-' + dd);