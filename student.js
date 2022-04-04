import Person from "./person";

class Student extends Person {
  constructor(firstName, lastName, Course) {
    super(firstName, lastName);
    this.course = Course;
  }
  getCourse() {
    return this.course;
  }
}

export default Student;
