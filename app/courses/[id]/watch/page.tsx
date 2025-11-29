import Link from "next/link";
import { getCourseById } from "@/data/courses";
import { notFound } from "next/navigation";

interface WatchPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ section?: string; video?: string }>;
}

export const dynamic = "force-dynamic";

export default async function WatchPage({
  params,
  searchParams,
}: WatchPageProps) {
  const { id } = await params;
  const { section: sectionId, video: videoId } = await searchParams;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  // デフォルトで最初のセクションの最初の動画を表示
  const currentSection =
    course.sections.find((s) => s.id === sectionId) || course.sections[0];
  const currentVideo =
    currentSection.videos.find((v) => v.id === videoId) ||
    currentSection.videos[0];

  if (!currentVideo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center gap-4">
          <Link
            href={`/courses/${course.id}`}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← コース詳細に戻る
          </Link>
          <span className="text-gray-500">|</span>
          <span className="text-gray-700 dark:text-gray-300">{course.title}</span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* 動画プレーヤー */}
          <div className="lg:col-span-3">
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                {currentVideo.title}
              </h2>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* セクション・動画リスト */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                カリキュラム
              </h3>
              <div className="space-y-4">
                {course.sections.map((section, sectionIndex) => (
                  <div key={section.id}>
                    <h4 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                      セクション {sectionIndex + 1}: {section.title}
                    </h4>
                    <ul className="ml-2 space-y-1">
                      {section.videos.map((video) => {
                        const isActive = video.id === currentVideo.id;
                        return (
                          <li key={video.id}>
                            <Link
                              href={`/courses/${course.id}/watch?section=${section.id}&video=${video.id}`}
                              className={`block rounded px-2 py-1 text-sm transition-colors ${
                                isActive
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                              }`}
                            >
                              <span className="mr-2">▶</span>
                              {video.title}
                              <span className="ml-2 text-xs text-gray-500">
                                ({video.duration})
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
