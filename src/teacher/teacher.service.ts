import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { StudentService } from '../student/student.service';

@Injectable()
export class TeacherService {

  constructor(@InjectRepository(Teacher) private teacher: Repository<Teacher>,
   @InjectRepository(Student) private student: Repository<Student>) {}

  create(createTeacherDto: CreateTeacherDto) {
    // const teacher = new Teacher();
    // teacher.name = "hello";
    // teacher.subject = "Math";
    // teacher.students = [[{id:1}, {id:2}]]

    this.teacher.save(createTeacherDto);


  }

  async findAll(): Promise<Teacher[]> {
    return await this.teacher.find({relations: ['students']});
  }

  async findTeacher(id): Promise<Teacher> {
    return await this.teacher.findOne({relations: ['students']});
  }

  async findOne(id: number): Promise<Teacher> {
    return await this.teacher.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    // return this.teacher.update(id, updateTeacherDto);
    // const i = await this.teacher.findOne(id);
    // i.students.push({"id":4}, {"id":5}, {"id": 6});
    // console.log(i);

    // let i = new CreateTeacherDto();





  }

  async updateTeacher(id: any, createTeacherDto: CreateTeacherDto) {
    this.teacher.update(id,createTeacherDto);

  }


  remove(id: number) {
    return this.teacher.delete(id);
  }
}
