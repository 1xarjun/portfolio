"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Submit from "./Submit";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

export default function PostEditor({
  initTitle,
  initBody,
  actionName,
  action,
  pageHeading,
  pageDescription,
}: {
  initTitle: string;
  initBody: string;
  actionName: string;
  action: (formData: FormData) => Promise<unknown>;
  pageHeading: string;
  pageDescription: boolean;
}) {
  const [title, setTitle] = useState(initTitle);
  const [body, setBody] = useState(initBody);

  return (
    <div className="space-y-14 text-foreground/80">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-foreground">{pageHeading}</h1>
        {pageDescription && <p className="text-muted-foreground">Share thoughts, ideas, stories, or tutorials.</p>}
      </div>

      <form className="prose prose-invert" action={action as (formData: FormData) => Promise<void>}>
        <FieldGroup>
          <Field>
            <FieldLabel className="text-foreground">Title</FieldLabel>
            <Input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </Field>
          <Field>
            <FieldLabel className="text-foreground">Body</FieldLabel>
            <Textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              minLength={30}
              name="body"
              placeholder="Type your blog body here..."
              required
            />

            <FieldDescription>
              Enter at least 30 characters. Markdown is supported.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Submit isInvalid={body.length < 30 || !title}>{actionName}</Submit>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
