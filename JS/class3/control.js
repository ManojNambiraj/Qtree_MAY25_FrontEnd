// Control statements:

// 1. Conditional Stmts

// if

// let age = 22

// if(age >= 18){
//     console.log("eligible for voting");
// }

// if else

// let age = 16;

// if (age >= 18) {
//     console.log("eligible for voting");
// }else{
//     console.log("not eligible");
// }

// if else if

// let age = 18;

// if (age > 18) {
//     console.log("eligible for voting");
// } else if (age == 18) {
//     console.log("Age is 18");
// } else {
//     console.log("not eligible");
// }

// switch case

// let day = 15

// switch (day) {
//     case 1:
//         console.log("It's a Monday");
//         break;
//     case 2:
//         console.log("It's a Tuesday");
//         break;
//     case 3:
//         console.log("It's a Wednesday");
//         break;
//     case 4:
//         console.log("It's a Thursday");
//         break;
//     case 5:
//         console.log("It's a Friday");
//         break;
//     case 6:
//         console.log("It's a Saturday");
//         break;
//     default:
//         console.log("happy weekend");
//         break;
// }

// 2. Looping stmts

// for loop

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// while loop

// let i = 11;

// while(i <= 5){
//     console.log(i);
//     i++;
// }

// do while

// let i = 11;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// Jumping statements:

// 1. Break

// for(let i = 1; i <= 5; i++){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
// }

// 2. Continue

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
