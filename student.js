class Student {

    constructor(name, surname, marks) {
        this.name = name;
        this.surname = surname;
        this.marks = marks;
    }

    calculateMean() {

        let sum = 0;

        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];

            sum += mark;
        }

        const mean = sum / this.marks.length;

        return mean;

    }

    addMark(newMark) {

        if (newMark >= 0 && newMark <= 10) {
            this.marks.push(newMark);
        } else {
            console.log('errore, voto non valido');
        }
    }

}