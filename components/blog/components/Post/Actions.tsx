"use client";

import { useTransition } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { deletePost } from "@/actions/post";
import { Spinner } from "@/components/ui/spinner";

export default function Actions({ number }: { number: number }) {
  const [isLoading, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-2.5">
      <Link
        href={`/blog/post/edit/${number}`}
        className={cn(buttonVariants({ size: "lg" }), "rounded-full px-3")}
      >
        Edit
      </Link>

      <Dialog>
        <DialogTrigger
          render={
            <Button
              size="lg"
              variant="destructive"
              className="rounded-full px-3"
            >
              Delete
            </Button>
          }
        />

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete post</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this post? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="border-foreground/10">
            {/* temporary solution for the border-t nasty white line*/}
            <DialogClose render={<Button>Cancel</Button>} />
            <Button
              variant="destructive"
              disabled={isLoading}
              onClick={() => {
                startTransition(async () => {
                  const error = await deletePost(number);
                  if (error) {
                    toast("Error deleting post.");
                  }
                });
              }}
            >
              {isLoading && <Spinner />}
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
