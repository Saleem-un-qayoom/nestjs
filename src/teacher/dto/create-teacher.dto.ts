import { Student } from "src/student/entities/student.entity";

export class CreateTeacherDto {
    name: string;
    subject: string;
    students: [Student];
}
