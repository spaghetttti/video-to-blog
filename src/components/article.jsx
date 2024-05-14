import 'tailwindcss/tailwind.css'
import { Button } from "@/components/ui/button"


export function Article() {
  return (
    (<div key="1" className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <div className="px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="prose prose-gray max-w-6xl mx-auto dark:prose-invert">
            <article>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none md:text-5xl">Exploring the Wonders of Nature</h1>
              <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
                Our planet is a true wonder, filled with breathtaking landscapes and diverse ecosystems that never cease to amaze. From towering mountains to serene forests, the natural world offers a wealth of beauty and intrigue for us to explore.
              </p>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                In this article, we'll take you on a journey through some of the most captivating natural wonders our world has to offer. We'll delve into the unique features and characteristics of these incredible environments, and explore the importance of conservation efforts to protect our precious natural heritage.
              </p>
              <h2 className="mt-12 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-3xl sm:leading-none md:text-4xl">Majestic Mountains</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Few sights are as awe-inspiring as the towering peaks of the world's great mountain ranges. From the snow-capped summits of the Himalayas to the rugged, jagged ridges of the Rockies, these natural giants have long captured the imagination of adventurers and nature enthusiasts alike.
              </p>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Climbing to the top of a mountain is a true test of human endurance and determination, but the rewards are immeasurable. The breathtaking views, the sense of accomplishment, and the deep connection with the natural world make the journey well worth the effort.
              </p>
              <h2 className="mt-12 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-3xl sm:leading-none md:text-4xl">Serene Forests</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                In contrast to the towering peaks, the world's forests offer a serene and tranquil respite from the hustle and bustle of everyday life. From the lush, verdant canopies of the Amazon to the ancient, moss-covered trees of the Pacific Northwest, these verdant oases are teeming with life and wonder.
              </p>

              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Wandering through a forest, with the gentle rustling of leaves and the calls of birds echoing all around, is a truly restorative experience. It's a chance to disconnect from the digital world and immerse ourselves in the natural rhythms of the earth, reconnecting with the fundamental elements that sustain us.
              </p>
              <h2 className="mt-12 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-3xl sm:leading-none md:text-4xl">The Importance of Conservation</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                As we explore the wonders of the natural world, it's crucial that we also recognize the importance of conservation efforts to protect these precious environments. From deforestation and habitat loss to climate change and pollution, our planet faces a multitude of threats that could irreversibly damage the delicate balance of our ecosystems.
              </p>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                By supporting conservation initiatives, volunteering our time, and making sustainable choices in our daily lives, we can all play a role in safeguarding the natural world for future generations. It's our responsibility to ensure that the breathtaking landscapes and diverse ecosystems we've explored in this article continue to thrive and flourish for years to come.
              </p>
              <div className="mt-12 flex items-center gap-4">
                <Button variant="outline">Share</Button>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span>May 14, 2024</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>)
  );
}

function CalendarDaysIcon(props) {
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
    </svg>)
  );
}