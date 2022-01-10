export interface IRequestLog {
  _id?: string;
  requestIp: string;
  language?: string;
  module: string;
  subModule: string;
  subPath: string;
  routeData: {
    url: string;
    originalUrl: string;
    path: string;
    handlerFunctions: [];
  };
  userId?: string;
  statusCode: number;
  internalError?: any;
  timings: {
    start: Date;
    end: Date;
    duration: number;
  };
  body?: {
    request?: object;
    response?: object;
  };
  isDeleted?: boolean;
}
