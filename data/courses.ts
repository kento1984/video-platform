import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    title: "Next.js完全ガイド",
    description: "Next.jsを使ったモダンなWebアプリケーション開発を学びます。App Router、Server Components、API Routesなど、Next.jsの主要機能を網羅的に学習できます。",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    instructor: "山田太郎",
    sections: [
      {
        id: "section-1",
        title: "イントロダクション",
        videos: [
          {
            id: "video-1-1",
            title: "Next.jsとは",
            youtubeId: "dQw4w9WgXcQ",
            duration: "5:30",
          },
          {
            id: "video-1-2",
            title: "開発環境のセットアップ",
            youtubeId: "dQw4w9WgXcQ",
            duration: "8:15",
          },
        ],
      },
      {
        id: "section-2",
        title: "基本的な機能",
        videos: [
          {
            id: "video-2-1",
            title: "ページとルーティング",
            youtubeId: "dQw4w9WgXcQ",
            duration: "12:45",
          },
          {
            id: "video-2-2",
            title: "コンポーネントの作成",
            youtubeId: "dQw4w9WgXcQ",
            duration: "10:20",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "React基礎から応用まで",
    description: "Reactの基礎から始めて、Hooks、状態管理、パフォーマンス最適化まで、実践的なReact開発スキルを身につけます。",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    instructor: "佐藤花子",
    sections: [
      {
        id: "section-1",
        title: "Reactの基礎",
        videos: [
          {
            id: "video-1-1",
            title: "コンポーネントとは",
            youtubeId: "dQw4w9WgXcQ",
            duration: "6:00",
          },
          {
            id: "video-1-2",
            title: "JSXの書き方",
            youtubeId: "dQw4w9WgXcQ",
            duration: "9:30",
          },
        ],
      },
      {
        id: "section-2",
        title: "Hooks",
        videos: [
          {
            id: "video-2-1",
            title: "useStateの使い方",
            youtubeId: "dQw4w9WgXcQ",
            duration: "11:15",
          },
          {
            id: "video-2-2",
            title: "useEffectの使い方",
            youtubeId: "dQw4w9WgXcQ",
            duration: "13:45",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "TypeScript実践入門",
    description: "TypeScriptの型システムを理解し、実践的なアプリケーション開発に活用する方法を学びます。",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    instructor: "鈴木一郎",
    sections: [
      {
        id: "section-1",
        title: "TypeScriptの基礎",
        videos: [
          {
            id: "video-1-1",
            title: "型の基本",
            youtubeId: "dQw4w9WgXcQ",
            duration: "7:20",
          },
          {
            id: "video-1-2",
            title: "インターフェースと型エイリアス",
            youtubeId: "dQw4w9WgXcQ",
            duration: "10:00",
          },
        ],
      },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}

