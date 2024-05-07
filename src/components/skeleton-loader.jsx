export function SkeletonLoader() {
  return (
    (<div key="1" className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div
        className="prose prose-gray max-w-6xl mx-auto dark:prose-invert space-y-6">
        <h2
          className="text-2xl font-bold items-center flex gap-2 justify-start animate-pulse">
          Generating your article
          <LoaderIcon className="w-6 h-6 animate-spin duration-[3s]" />
        </h2>
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

function LoaderIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="6" />
      <line x1="12" x2="12" y1="18" y2="22" />
      <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
      <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
      <line x1="2" x2="6" y1="12" y2="12" />
      <line x1="18" x2="22" y1="12" y2="12" />
      <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
      <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
    </svg>)
  );
}
