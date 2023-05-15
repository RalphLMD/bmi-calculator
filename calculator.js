const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server is running");
});

app.set("view engine", 'ejs')

app.use(express.static(__dirname + '/public'));

app.get("/", function(request, response){
    response.render('bmiCalculator', {});
});

// app.post("/index.html", function(request, response){
//     //const num1 = request.body.num1;
//     //const num2 = request.body.num2;
//     const num1 = Number(request.body.num1);
//     const num2 = Number(request.body.num2);

//     const result = num1 + num2;

//     response.send("The result is " + result);
// });

// app.post("/bmiCalculator.html", function(request, response){
//     const height = parseFloat(request.body.height);
//     const weight = parseFloat(request.body.weight);

//     const bmi = parseFloat(weight/Math.pow(height, 2)).toFixed(2);

//     if (bmi < 18.5) {
//         interpretation = ("Your BMI is " + bmi + ", so you are underweight.");
//      }
//      if (bmi >= 18.5 && bmi <=24.9) {
//         interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.");
//      }
//      if (bmi >24.9) {
//         interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
//      }

//     response.send(interpretation);
// });

app.post("/", function(request, response){
    const height = parseFloat(request.body.height);
    const weight = parseFloat(request.body.weight);

    const bmi = parseFloat(weight/Math.pow(height, 2)).toFixed(2);

    if (bmi < 18.5) {
        interpretation = ("Your BMI is " + bmi + ", so you are underweight.");
     }
     if (bmi >= 18.5 && bmi <=24.9) {
        interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.");
     }
     if (bmi >24.9) {
        interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
     }

    response.render('result', {interpret: interpretation})
});

app.post("/", function(request, response){
    response.render('bmiCalculator', {})
})

