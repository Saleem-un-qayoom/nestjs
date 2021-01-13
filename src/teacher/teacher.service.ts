import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {

  constructor(@InjectRepository(Teacher) private teacher: Repository<Teacher>) {}

  create(createTeacherDto: CreateTeacherDto) {
    return this.teacher.save(createTeacherDto);
  }

  async findAll(): Promise<Teacher[]> {
    return await this.teacher.find();
  }

  async findTeacher(id): Promise<Teacher> {
    return await this.teacher.findOne(id, {relations: ['students'] });
  }

  async findOne(id: number): Promise<Teacher> {
    return await this.teacher.findOne({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.teacher.update(id, updateTeacherDto);
  }

  remove(id: number) {
    return this.teacher.delete(id);
  }
}
