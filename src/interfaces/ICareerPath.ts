import { ICourse } from './ICourse';
export interface ICareerPath {
  _id: string;
  name: string;
  description: string;
  thumbnail: string;
  language: string;
  price: number;
  totalTime: number;
  supportLink: string;
  syllabusLink: string;
  certifications: string;
  challenges: [
    {
      thumbnail: string;
      title: string;
      description: string;
    },
  ];
  performs: [
    {
      title: string;
      description: string;
    },
  ];
  coursesId: import('mongoose').Schema.Types.ObjectId[] | ICourse[];
  courses: ICourse[];
  backgroundImage: string;
}

export interface ICareerPathSearchDTO {
  _id?: any;
}
