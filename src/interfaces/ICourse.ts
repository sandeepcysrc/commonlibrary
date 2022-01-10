import { CourseDifficultLevel } from '../enum';
import ILesson from './ILesson';

export interface ICourse {
  toJSON(): any;
  _id: string;
  name: string;
  length: number;
  language: string;
  teacher: string;
  type: string;
  supportLink: string;
  thumbnail: string;
  thumbnailStickers: string;
  description: string;
  lessons: ILesson[];
  difficultLevel: CourseDifficultLevel;
  lessonId: import('mongoose').Schema.Types.ObjectId[] | ILesson[];
}

export interface ICourseFilterDTO {
  difficultLevel: any;
}
