// Declare any necessary variables.
let newStudent

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.getElementById('print').addEventListener('click', function() {
    newStudentOBJ()
    printCertificate()

})

// Create a function that instantiates a new student object with the input from the HTML form.
function newStudentOBJ(){
    newStudent = new Student(document.getElementById('studentName').value,
        document.getElementById('className').value,
        commaConvert(document.getElementById('studentScores').value),
        commaConvert(document.getElementById('possibleScores').value))

}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function printCertificate(){
    document.getElementById('certStudentName').innerHTML = newStudent.studentName;
    document.getElementById('certClassName').innerHTML = newStudent.className;
    document.getElementById('certGrade').innerHTML = newStudent.calculateLetterGrade();
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function commaConvert(textStr){
    numAry = textStr.split(',');
    numAry = numAry.map(function(item) {
        return parseInt(item)
    })
    return numAry;
}

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
