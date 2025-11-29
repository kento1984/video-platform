export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
}

export interface Section {
  id: string;
  title: string;
  videos: Video[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  sections: Section[];
}

