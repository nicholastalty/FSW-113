// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class Student {
    constructor(studentName, className, studentScores, possibleScores) {
        this.studentName = studentName;
        this.className = className;
        this.studentScores = studentScores;
        this.possibleScores = possibleScores;
    }

    calculateLetterGrade() {
        let score = this.studentScoreTotal() / this.possibleScoreTotal()

        //console.log('score: ', score)

        // .6 - F
        // .7 - D
        // .8 - C
        // .9 - B
        // A

        if(score < .6) {
            return 'F'
        } else if(score < .7) {
            return 'D'
        } else if(score < .8) {
            return 'C'
        } else if (score < .9) {
            return 'B'
        } else {
            return 'A'
        }

    }

    studentScoreTotal(){
        // Syntax for reduce
        // array.reduce(function(total, currentValue), initialValue)

        let totalScore = this.studentScores.reduce(
            (curTotal, item) => {
                return item + curTotal
            },0
        )
        return totalScore;
    }

    possibleScoreTotal(){
        let totalScore = this.possibleScores.reduce(
            (curTotal, item) => {
                return item + curTotal
            },0
        )
        return totalScore;
    }
}


//MDN Example:
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }