import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { db, doc, getDoc } from "../../firebase";
import Link from "next/link";

export default function ArticleCard({ articleId }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, "articles", articleId);
      const ref = await getDoc(docRef);

      if (ref.exists) {
        setArticle(ref.data());
        console.log("Document data:", ref.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchArticle();
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }


  const date = article.date_created.toDate();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // 24-hour format
  const contentWords = article.content.split(" ");
  const descriptionWords = contentWords.slice(10, 60);
  const description = descriptionWords.join(" ");

  return (
    <Link href="/articles/[id]" as={`/articles/${article.id}`} passHref>
      <div className="block px-4 py-6 md:px-6 md:py-12 lg:py-16 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
        <div className="prose prose-gray max-w-6xl mx-auto dark:prose-invert">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              alt="Article Image"
              className="rounded-md object-cover aspect-video h-full"
              height={240}
              src={article.thumbnail_url}
              width={360}
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{article.title}</h2>
              <p>{description}</p>
              <div className="flex items-center gap-4">
                <Link
                  href="/article/[id]"
                  as={`/article/${article.id}`}
                  passHref
                >
                  <Button variant="outline" as="a">
                    Read More
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span>{dateString} {timeString}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ...

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
