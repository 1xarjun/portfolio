import { Metadata } from "next";
import { getPost } from "@/blog-utils/post";
import Actions from "@/components/blog/components/Post/Actions";
import MarkdownWrapper from "@/components/blog/components/Post/MarkdownWrapper";
import CommentsSection from "@/components/blog/components/Post/CommentsSection";
import { isAuthor } from "@/blog-utils/auth";

export async function generateMetadata({
  params,
}: {
  params: { number: string };
}): Promise<Metadata> {
  const { number } = await params;
  const integer = parseInt(number);
  const post = await getPost(integer);

  return {
    title: post?.title,
  };
}

export default async function Post({ params }: { params: { number: string } }) {
  const { number } = await params;
  const integer = parseInt(number);
  const post = await getPost(integer);

  return (
    <div className="text-foreground/80 space-y-8">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-3xl font-bold text-foreground">{post?.title}</h1>
        <span className="text-sm text-muted-foreground">
          {new Date(post?.created_at).toLocaleString("en-US", {
            dateStyle: "medium",
          })}
        </span>
      </div>

      {(await isAuthor()) ? <Actions number={integer} /> : null}

      <div className="prose dark:prose-invert prose-pre:bg-[#282c34]">
        <MarkdownWrapper>{post.body}</MarkdownWrapper>
        <hr />
      </div>

      <div className="pt-4">
        <CommentsSection number={integer} />
      </div>
    </div>
  );
}
