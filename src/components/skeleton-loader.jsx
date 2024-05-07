
export function SkeletonLoader() {
  return (
    (<div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div
        className="prose prose-gray max-w-6xl mx-auto dark:prose-invert space-y-6">
        <h2 className="text-2xl font-bold">Generating your article</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded-md w-3/4 dark:bg-gray-700" />
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-md w-32 dark:bg-gray-700" />
              <div className="h-4 bg-gray-200 rounded-md w-24 dark:bg-gray-700" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>)
  );
}
