import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { timer } from 'rxjs';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    console.log(createTeacherDto);
    return this.teacherService.create(createTeacherDto);
    
  }

  @Get()
  async findAll(): Promise<Teacher[]> {
    return await this.teacherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Teacher> {
    return await this.teacherService.findOne(+id);
  }

  @Get('student/:id')
  async findTeacher(@Param('id') id: string): Promise<Teacher> {
    return await this.teacherService.findTeacher(id);
  }

  @Put('update/:id')
  async updateTeacher(@Param('id') id: number, @Body() createTeacherDto: CreateTeacherDto) {
    return await this.teacherService.updateTeacher(id, createTeacherDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(+id);
  }
}
