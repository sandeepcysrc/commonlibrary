import { languageOptions } from '../enum';
import * as mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const CareerPathSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    description: { type: String, required: true },
    language: { type: String, required: true, enum: languageOptions },
    thumbnail: { type: String },
    coursesId: [{ type: ObjectId, ref: 'Courses' }],
    price: { type: Number },
    totalTime: { type: Number },
    supportLink: { type: String },
    syllabusLink: { type: String },
    certifications: { type: String },
    challenges: [
      {
        thumbnail: { type: String },
        title: { type: String },
        description: { type: String },
      },
    ],
    performs: [
      {
        title: { type: String },
        description: { type: String },
      },
    ],
    backgroundImage: { type: String },
  },
  { timestamps: true },
);

export default CareerPathSchema;
