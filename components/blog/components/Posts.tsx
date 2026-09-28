"use client";

// import { InView } from 'react-intersection-observer';
import Link from "next/link";
// import { Spinner } from "@heroui/spinner";
// import Title from '@/components/Post/Title';
import usePosts from "@/blog-hooks/usePosts";
import { Issues } from "@/blog-types";
import MountProvider from "@/contexts/MountProvider";

export default function Posts({ data }: { data: Issues }) {
  const { posts, noMorePosts, loadMore } = usePosts(data);

  return (
    <div className="flex flex-col gap-12">
      {posts.map((post) => (
        <Link
          className="flex flex-col justify-center gap-2.5 transition-opacity hover:opacity-80 duration-300"
          key={post.id}
          href={`/blog/post/${post.number}`}
        >
          <p className="text-2xl font-semibold text-foreground">{post.title}</p>
          <MountProvider>
            <span className="text-sm text-muted-foreground">
              {new Date(post.created_at).toLocaleString("en-US", {
                dateStyle: "medium"
              })}
            </span>
          </MountProvider>
        </Link>
      ))}
    </div>
  );
}

// {/*<InView
//   onChange={(inView: boolean) => {
//     if (!inView) {
//       return;
//     }

//     loadMore();
//   }}
// >
//   {({ ref }) =>
//     noMorePosts ? null : (
//       <Spinner ref={ref} color="primary" role="status" />
//     )
//   }
// </InView>*/}
