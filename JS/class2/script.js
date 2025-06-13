// Hoisting --> Variable declaration

// ES5

    // var age = 20

    // var age = 25

    // console.log(age);

// ES6

    // Let

        // let age = 22

        // age = 25

        // console.log(age);

    // Const

        // const age = 20

        // console.log(age);

// Scoping:

    // 1. Global scope

        // {
        //     var a = 10

        //     console.log("inside-->", a);
        // }

        // console.log("outside-->", a);

    // 2. Local scope

        // {
        //   const a = 10;

        //   console.log("inside-->", a);
        // }

        // console.log("outside-->", a);