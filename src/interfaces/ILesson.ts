interface IVideos {
  _id: string;
  videoNumber: number;
  duration: string;
  videoId: string;
  isWatched: boolean;
  videoDescription: string;
}

interface ILesson {
  _id: string;
  day: number;
  name: string;
  description: string;
  attachmentLink: string;
  videos: IVideos[];
}

export default ILesson;
