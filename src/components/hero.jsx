import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import ReactPlayer from "react-player"
import { useState } from "react";
import { BeatLoader } from 'react-spinners';
import { SkeletonLoader } from "./skeleton-loader"
import ArticleCard from "./article-card"
export function Hero() {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(URL.createObjectURL(file));
  };

  const handleYoutubeLinkChange = (event) => {
    setYoutubeLink(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsFinished(true);

    }, 3000);
    // if (youtubeLink) {
    //   try {
    //     const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BACKEND_HOST}/process-youtube-link`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ youtubeLink }),
    //     });
    //     const data = await response.json();
    //     console.log('Success:', data);
    //     setIsLoading(false);
    //     // Handle successful response (e.g., display message)
    //   } catch (error) {
    //     console.error('Error:', error);
    //     setIsLoading(false);
    //     // Handle errors (e.g., display error message)
    //   }
    // } else if (videoFile) {
    //   try {
    //     const formData = new FormData();
    //     formData.append('videoFile', videoFile);

    //     const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BACKEND_HOST}/process-video-file`, {
    //       method: 'POST',
    //       body: formData,
    //     });
    //     const data = await response.json();
    //     console.log('Success:', data);
    //     setIsLoading(false);
    //     // Handle successful response (e.g., display message)
    //   } catch (error) {
    //     console.error('Error:', error);
    //     setIsLoading(false);
    //     // Handle errors (e.g., display error message)
    //   }
    // } else {
    //   // Handle case where neither link nor file is provided
    //   console.error('Please provide either a YouTube link or a YouTube video file');
    //   setIsLoading(false);
    // }
  };

  return (
    (<main className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid gap-8 md:gap-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Video to Blog Converter</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[650px]">
            Convert your videos into engaging blog posts with our easy-to-use tool. Simply upload a video or enter a
            YouTube link, and we'll do the rest.
          </p>
        </div>
        {isLoading ? <SkeletonLoader /> : !isFinished && <form onSubmit={handleSubmit}>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 grid gap-6">
            <div className="grid gap-4">
              <h2 className="text-xl font-semibold">Add a Video</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="video-file">Upload a Video</Label>
                  <Input
                    accept="video/*"
                    className="w-full"
                    id="video-file"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="youtube-link">Or enter a YouTube link</Label>
                  <Input
                    className="w-full"
                    id="youtube-link"
                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    type="url"
                    onChange={handleYoutubeLinkChange}
                  />
                </div>
              </div>
            </div>
            <Button className="w-full md:w-auto" type="submit">
              {isLoading ? <BeatLoader size={10} /> : 'Convert Video'}
            </Button>
          </div>
        </form>}

        {videoFile && !isFinished && (
          <div className="mb-4 flex justify-center">
            <ReactPlayer url={videoFile} controls />
          </div>
        )}
         {youtubeLink && !isFinished && (
          <div className="mb-4 flex justify-center">
            <ReactPlayer url={youtubeLink} controls />
          </div>
        )}

        {!isLoading && isFinished && <div>
          <h2 className="text-xl font-semibold">Your article is ready!</h2>
              <ArticleCard />
          </div>}       
           <div className="grid gap-6">
          <h2 className="text-xl font-semibold">Converted Videos</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="grid gap-4">
                <div className="rounded-lg overflow-hidden aspect-video">
                  <span
                    className="w-full h-full object-cover rounded-md bg-gray-100 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">The Future of Frontend Development</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    In this video, we explore the latest trends and technologies shaping the future of frontend
                    development. From the rise of WebAssembly to the increasing importance of performance and
                    accessibility, we dive deep into the key areas that will define the next generation of web
                    applications.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid gap-4">
                <div className="rounded-lg overflow-hidden aspect-video">
                  <span
                    className="w-full h-full object-cover rounded-md bg-gray-100 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Mastering Responsive Design</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    In this video, we dive into the principles and best practices of responsive web design. Learn how to
                    create layouts that adapt seamlessly to different screen sizes, and discover techniques for
                    optimizing performance and user experience across devices.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid gap-4">
                <div className="rounded-lg overflow-hidden aspect-video">
                  <span
                    className="w-full h-full object-cover rounded-md bg-gray-100 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Accessibility in Modern Web Design</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    In this video, we explore the importance of accessibility in modern web design. Learn how to create
                    inclusive experiences that cater to users with diverse abilities, and discover practical techniques
                    for implementing accessible features in your projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>)
  );
}