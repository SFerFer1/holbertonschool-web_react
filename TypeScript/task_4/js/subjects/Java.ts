namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingJava?: number;
    }
  
    export class Java {
      teacher: Teacher;
  
      constructor(teacher: Teacher) {
        this.teacher = teacher;
      }
  
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
      }
    }
  }
  