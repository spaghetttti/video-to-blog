import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";
import ReactPlayer from "react-player";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { SkeletonLoader } from "./skeleton-loader";
import ArticleCard from "./article-card";
import { db } from "../../firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { Link } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
  const [youtubeLink, setYoutubeLink] = useState("");
  // const [videoFile, setVideoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [articleId, setArticleId] = useState(null);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initial state: true

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const articlesRef = collection(db, "articles");
        const q = query(articlesRef, orderBy("date_created", "desc"), limit(3));
        const snapshot = await getDocs(q);
        const fetchedArticles = snapshot.docs.map((doc) => doc.data());
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };
    console.log("Fetching articles");

    fetchLatestArticles();
  }, [isFinished]);

  console.log("articles", articles[0]);

  // const handleFileChange = (event) => {
  //   setVideoFile(event.target.files[0]);
  // };

  const handleYoutubeLinkChange = (event) => {
    setYoutubeLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
     if (youtubeLink) {
       try {
         const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BACKEND_HOST}/process-youtube-link`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ youtubeLink }),
         });
         const data = await response.json();
         console.log('Success:', data);
         const article_id = data.article_id;
         setIsLoading(false);
         setArticleId(article_id); // Store article_id in state
         setIsFinished(true);

          //  Handle successful response (e.g., display message)
       } catch (error) {
         console.error('Error:', error);
         setIsLoading(false);
          //  Handle errors (e.g., display error message)
       }
     } else {
        //  Handle case where neither link nor file is provided
       console.error('Please provide either a YouTube link');
       setIsLoading(false);
     }
  };



  const createDescription = (content) => {
    return (
      content.split(" ").slice(10, 40).join(" ") || "No description available"
    );
  };

  return (
    <main className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid gap-8 md:gap-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Video to Blog Converter
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[650px]">
            Convert your videos into engaging blog posts with our easy-to-use
            tool. Simply upload a video or enter a YouTube link, and we'll do
            the rest.
          </p>
        </div>

        {isLoading ? (
          <SkeletonLoader />
        ) : !isFinished ? (
          <form onSubmit={handleSubmit}>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 grid gap-6">
              <div className="grid gap-4">
                <h2 className="text-xl font-semibold">Add a Video</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* <div className="space-y-2">
                    <Label htmlFor="video-file">Upload a Video</Label>
                    <Input
                      accept="video/*"
                      className="w-full text"
                      id="video-file"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div> */}
                  <div className="space-y-2">
                    <Label htmlFor="youtube-link">
                      Or enter a YouTube link
                    </Label>
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
                {isLoading ? <BeatLoader size={10} /> : "Convert Video"}
              </Button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-xl font-semibold">Your article is ready!</h2>
            <ArticleCard articleId={articleId} />
          </div>
        )}
      </div>

      {/* {videoFile && !isFinished && (
        <div className="mb-4 flex justify-center">
          <ReactPlayer url={videoFile} controls />
        </div>
      )} */}

      {youtubeLink && !isFinished && (
        <div className="mb-4 flex justify-center">
          <ReactPlayer url={youtubeLink} controls />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-6">
        <h2 className="text-xl font-semibold">Converted Videos</h2>
        {loading ? (
          <p>Loading articles...</p> // Or use a loading spinner
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* ... (map over articles as before) */}
            {articles.map((article) => (
                    <Card
                        id={article.id}
                        key={article.id}
                        imgSrc={article.thumbnail_url}
                        imgAlt="Article Image"
                        title={article.title}
                        description={createDescription(article.content)}
                    />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
