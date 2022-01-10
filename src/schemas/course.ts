import { CourseDifficultLevel, CourseType, languageOptions } from '../enum';
import * as mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const CourseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    length: { type: Number, required: true },
    language: { type: String, required: true, enum: languageOptions },
    teacher: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: CourseType,
      default: CourseType.Basic,
    },
    supportLink: { type: String, required: false },
    syllabusLink: { type: String, required: false },
    thumbnail: { type: String },
    thumbnailStickers: { type: String },
    description: { type: String },
    lessonId: [
      {
        type: ObjectId,
        ref: 'Lessons',
      },
    ],
    category: String,
    difficultLevel: {
      type: String,
      required: true,
      enum: CourseDifficultLevel,
      default: CourseDifficultLevel.Intermediate,
    },
    price: {
      type: Number,
      required: true,
    },
    hours: { type: Number },
    backgroundImage: { type: String },
    courseImage: { type: String },
    topics: [{ title: { type: String } }],
    requirements: [{ title: { type: String } }],
    totalVideo: { type: Number },
  },
  { timestamps: true },
);

export default CourseSchema;
