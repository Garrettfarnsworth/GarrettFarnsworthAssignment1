var calculate = document.getElementById("calculateButton");

calculate.addEventListener("click", function () {
    //Calculate the grade percentages of each section.
    var totalGrade = (parseFloat(document.getElementById("Assign").value * 0.50) + parseFloat(document.getElementById("GroupProj").value * 0.10)
        + parseFloat(document.getElementById("Quiz").value * 0.10) + parseFloat(document.getElementById("Exam").value * 0.20)
        + parseFloat(document.getElementById("Intex").value * 0.10));
    //Have the letter grade calculation equal the percentage that was worked out so we can decide what letter grade to give them based off of syllabus.
    var letterGrade = totalGrade;
    //Set of if statements to figure out which letter grade goes with the percentage that was calculated.
    if (letterGrade >= 94) {
        letterGrade = "A";
    }
    else if (letterGrade < 94 && letterGrade >= 90) {
        letterGrade = "A-";
    }
    else if (letterGrade < 90 && letterGrade >= 87) {
        letterGrade = "B+";
    }
    else if (letterGrade < 87 && letterGrade >= 84) {
        letterGrade = "B";
    }
    else if (letterGrade < 84 && letterGrade >= 80) {
        letterGrade = "B-";
    }
    else if (letterGrade < 80 && letterGrade >= 77) {
        letterGrade = "C+";
    }
    else if (letterGrade < 77 && letterGrade >= 74) {
        letterGrade = "C";
    }
    else if (letterGrade < 74 && letterGrade >= 70) {
        letterGrade = "C-";
    }
    else if (letterGrade < 70 && letterGrade >= 67) {
        letterGrade = "D+";
    }
    else if (letterGrade < 67 && letterGrade >= 64) {
        letterGrade = "D";
    }
    else if (letterGrade < 64 && letterGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }
    //Alert the user of their grade percentage and letter grade.
    alert("Grade Percentage = " + totalGrade + "% and Letter Grade = " + letterGrade);
});

