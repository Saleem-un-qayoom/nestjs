import { Student } from "src/student/entities/student.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    subject: string;

    @ManyToMany(() => Student)
    @JoinTable({
        name: 'teacher_student',
        joinColumn: {
          name: 'teacher_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'student_id',
          referencedColumnName: 'id',
        },
      })
    students: Student[];
}
