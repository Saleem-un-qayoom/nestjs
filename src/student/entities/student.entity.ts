import { Teacher } from "src/teacher/entities/teacher.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    teacher_id: number;

    @ManyToOne(() => Teacher, teacher => teacher.students)
    @JoinColumn({ name: "teacher_id" })
    teacher: Teacher;
}
