import { isAuthor } from "@/blog-utils/auth";
import { getPosts } from "@/blog-utils/post";
import Posts from "@/components/blog/components/Posts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
  };
}

export default async function Home() {
  const pageNumber = 1;
  const data = await getPosts(pageNumber);

  return (
    <div className="space-y-14">

      <div className="flex justify-between items-center border-b border-border pb-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Blog</h1>
          <p className="text-muted-foreground leading-relaxed">
            This is where I occasionally share my journey.
          </p>
        </div>

        {(await isAuthor()) ? (
          <Link className={cn(buttonVariants({ size: "lg" }), "rounded-full px-3")} href="/blog/post/new">
            New Post
          </Link>
        ) : null}
      </div>

      <Posts data={data} />
    </div>
  );
}
