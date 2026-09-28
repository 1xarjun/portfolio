import { getUser } from "@/blog-utils/auth";
import CommentCreator from "./CommentCreator";
import Comments from "./Comments";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarWrapper from "../../Layout/AvatarWrapper";

export default async function CommentsSection({ number }: { number: number }) {
  const user = await getUser();

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-foreground">Comments</h2>
        <AvatarWrapper user={user} />
      </div>
      <div className="space-y-8">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={user?.avatar_url} alt={"@" + user?.login} />
            <AvatarFallback>PF</AvatarFallback>
          </Avatar>
          <CommentCreator number={number} user={user} />
        </div>
        <Comments number={number} />
      </div>
    </div>
  );
}
