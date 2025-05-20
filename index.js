// kroppsvikten i kg / (kroppslängden i meter * kroppslängden i meter) 
// Resultat från formeln delas in i olika viktklasser.

// BMI	Klassificering
// < 18,5	Undervikt
// 18,5 – 25	Normalvikt
// 25 – 30	Övervikt
// 30 >	Fetma

function calculateBMI(weight, height) {
    const BMI = weight / (height * height);

    if (BMI < 18.5) {
        console.log("Undervikt");
    }
    else if (BMI >= 18.5 && BMI < 25) {
        console.log("Normalvikt");
    }
    else if (BMI >= 25 && BMI < 30) {
        console.log("Övervikt");
    }
    else {
        console.log("Fetma");
    }

};
