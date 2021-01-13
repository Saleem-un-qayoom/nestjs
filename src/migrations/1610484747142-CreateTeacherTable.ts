import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTeacherTable1610484747142 implements MigrationInterface {
    name = 'CreateTeacherTable1610484747142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `student` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `teacher_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `teacher` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `subject` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `teacher`");
        await queryRunner.query("DROP TABLE `student`");
    }

}