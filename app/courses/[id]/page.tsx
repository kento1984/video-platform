import Link from "next/link";
import Image from "next/image";
import { getCourseById } from "@/data/courses";
import { notFound } from "next/navigation";

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  const totalVideos = course.sections.reduce(
    (sum, section) => sum + section.videos.length,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="mb-6 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← コース一覧に戻る
        </Link>

        <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
          <div className="relative h-64 w-full md:h-96">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="p-6">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
              {course.title}
            </h1>
            <div className="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>講師: {course.instructor}</span>
              <span>•</span>
              <span>{course.sections.length} セクション</span>
              <span>•</span>
              <span>{totalVideos} 動画</span>
            </div>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {course.description}
            </p>
            <Link
              href={`/courses/${course.id}/watch`}
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              コースを見る
            </Link>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            カリキュラム
          </h2>
          <div className="space-y-4">
            {course.sections.map((section, sectionIndex) => (
              <div key={section.id} className="border-b border-gray-200 pb-4 last:border-b-0 dark:border-gray-700">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  セクション {sectionIndex + 1}: {section.title}
                </h3>
                <ul className="ml-4 space-y-2">
                  {section.videos.map((video) => (
                    <li
                      key={video.id}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-blue-600 dark:text-blue-400">▶</span>
                      <span>{video.title}</span>
                      <span className="text-sm text-gray-500">({video.duration})</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
