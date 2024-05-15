import { useRouter } from "next/router";
import { Article } from "@/components/article";
export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  return <Article />;
}
