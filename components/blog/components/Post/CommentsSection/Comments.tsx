import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getComments } from '@/blog-utils/post';
import MarkdownWrapper from '../MarkdownWrapper';

export default async function Comments({ number }: { number: number }) {
  const comments = await getComments(number);

  if (!comments.length) {
    return <div>There are no comments yet.</div>;
  }

  return comments.map((comment) => (
    <div key={comment.id} className="flex gap-4 items-start">
      <Avatar>
        <AvatarImage src={comment.user?.avatar_url} alt={comment.user?.login} className="flex-shrink-0" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full gap-1 text-sm">
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="text-foreground font-medium"
            href={comment.user?.html_url as string}
          >
            @{comment.user?.login}
          </a>
          {/*&bull;*/}
          <span className="text-sm text-muted-foreground">
            {new Date(comment.created_at).toLocaleString("en-US", { dateStyle: "medium" })}
          </span>
        </div>

        <div className="prose dark:prose-invert">
          <MarkdownWrapper>{comment.body}</MarkdownWrapper>
        </div>
      </div>
    </div>
  ));
}
