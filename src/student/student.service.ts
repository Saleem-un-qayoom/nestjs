import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private student: Repository<Student>) {}

  create(createStudentDto: CreateStudentDto) {
    return this.student.save(createStudentDto);
  }

  findAll() {
    return this.student.find();
  }

  findOne(id: number) {
    return this.student.findOne({
      where: {
        id: id
      }
    });
  }
  
  async findStudent(id: number): Promise<Student> {
    return await this.student.findOne(id, {relations: ['teacher']})
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.student.update(id, updateStudentDto);
  }

  remove(id: number) {
    return this.student.delete(id);
  }
}
