
import { Teacher } from "src/teacher/entities/teacher.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Teacher, teacher => teacher.students)
    @JoinTable({
        name: 'teacher_student',
        joinColumn: {
          name: 'student_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'teacher_id',
          referencedColumnName: 'id',
        },
      })
    teachers: Teacher[];

}