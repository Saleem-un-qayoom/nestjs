import {MigrationInterface, QueryRunner} from "typeorm";

export class studentTeacherManytoManty1610537574049 implements MigrationInterface {
    name = 'studentTeacherManytoManty1610537574049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `teacher_student` (`teacher_id` int NOT NULL, `student_id` int NOT NULL, INDEX `IDX_479ec47b67f1f351bbbc30b50b` (`teacher_id`), INDEX `IDX_72db32bbc44b021dacec3aba99` (`student_id`), PRIMARY KEY (`teacher_id`, `student_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `teacher_id`");
        await queryRunner.query("ALTER TABLE `student` ADD `teacher_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `teacher_student` ADD CONSTRAINT `FK_479ec47b67f1f351bbbc30b50bd` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `teacher_student` ADD CONSTRAINT `FK_72db32bbc44b021dacec3aba997` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `teacher_student` DROP FOREIGN KEY `FK_72db32bbc44b021dacec3aba997`");
        await queryRunner.query("ALTER TABLE `teacher_student` DROP FOREIGN KEY `FK_479ec47b67f1f351bbbc30b50bd`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `teacher_id`");
        await queryRunner.query("ALTER TABLE `student` ADD `teacher_id` varchar(255) NOT NULL");
        await queryRunner.query("DROP INDEX `IDX_72db32bbc44b021dacec3aba99` ON `teacher_student`");
        await queryRunner.query("DROP INDEX `IDX_479ec47b67f1f351bbbc30b50b` ON `teacher_student`");
        await queryRunner.query("DROP TABLE `teacher_student`");
    }

}
