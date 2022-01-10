import * as mongoose from 'mongoose';
const { Schema } = mongoose;
const escapeProperty = (value: any) => {
  return value;
};

const RequestLogSchema = new mongoose.Schema(
  {
    requestIp: {
      type: String,
      required: true,
      index: true,
      get: escapeProperty,
    },
    module: {
      type: String,
      required: true,
      index: true,
      get: escapeProperty,
    },
    subModule: {
      type: String,
      index: true,
      get: escapeProperty,
    },
    subPath: {
      type: String,
      index: true,
      get: escapeProperty,
    },
    routeData: {
      url: {
        type: String,
        get: escapeProperty,
      },
      originalUrl: {
        type: String,
        get: escapeProperty,
      },
      path: {
        type: String,
        get: escapeProperty,
      },
      handlerFunctions: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      default: null,
      ref: 'User',
    },
    statusCode: {
      type: Number,
      default: 0,
      index: true,
    },
    internalError: {
      type: Schema.Types.Mixed,
      default: {},
    },
    timings: {
      start: {
        type: Date,
      },
      end: {
        type: Date,
      },
      duration: {
        type: Number,
      },
    },
    body: {
      request: {},
      response: {},
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default RequestLogSchema;
