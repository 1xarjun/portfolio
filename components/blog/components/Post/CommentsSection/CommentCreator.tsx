"use client";

import { createComment } from "@/actions/comment";
import Submit from "@/components/blog/components/PostEditor/Submit";
import { User } from "@/blog-types";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { usePathname } from "next/navigation";
import { login } from "@/actions/auth";

export default function CommentCreator({
  number,
  user,
}: {
  number: number;
  user: User | null;
}) {
  const [body, setBody] = useState("");
  const bodyIsInvalid = body === "";
  const pathname = usePathname();

  return (
    <form
      action={async (formData) => {
        await createComment(number, formData);
        setBody("");
      }}
      className="flex flex-col gap-3 w-full"
    >
      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        disabled={!user}
        name="body"
        placeholder="Write your comment here..."
      />
      {user ? (
        <Submit isInvalid={bodyIsInvalid}>Comment</Submit>
      ) : (
        <Button
          variant="outline"
          className="rounded-full w-fit ml-auto"
          onClick={() => login(pathname)}
        >
          Sign In with Github
          <SiGithub />
        </Button>
      )}
    </form>
  );
}
