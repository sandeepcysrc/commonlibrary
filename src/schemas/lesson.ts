import * as mongoose from 'mongoose';
const LessonSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    day: Number,
    attachmentLink: [String],
    videos: [
      {
        videoNumber: Number,
        duration: String,
        videoId: String,
        videoDescription: String,
        isWatched: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true },
);

export default LessonSchema;
