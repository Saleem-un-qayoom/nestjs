import { Student } from "src/student/entities/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    subject: string;

    @OneToMany(() => Student, student => student.teacher)
    students: Student[];
}
