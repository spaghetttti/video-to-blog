import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link";

const Card = React.forwardRef(({ id, imgSrc, imgAlt, title, description, className, ...props }, ref) => {
  const maxLength = 100;
  const trimmedDescription = description.length > maxLength ? 
    description.substring(0, maxLength) + "..." : 
    description;

  return (
    <Link href={`/articles/${id}`} passHref>
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
        className
      )}
      {...props}
    >
      <div className="rounded-t-lg overflow-hidden aspect-video pb-2">
        <img
          alt={imgAlt}
          className="object-cover aspect-video w-full h-full"
          height={240}
          src={imgSrc}
          width={400}
        />
      </div>
      <div ref={ref} className={cn("p-6 pt-0", className)}>
        <h3
          ref={ref}
          className={cn("text-xl font-semibold leading-none tracking-tight pb-2", className)}
        >
          {title}
        </h3>
        <p
          ref={ref}
          className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
        >
          {trimmedDescription}
        </p>
      </div>
    </div>
    </Link>
  )
})

Card.displayName = "Card"

export { Card }