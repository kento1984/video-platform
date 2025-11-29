import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            unoptimized
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {course.title}
          </h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {course.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-500">
              {course.instructor}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-500">
              {course.sections.length} セクション
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

