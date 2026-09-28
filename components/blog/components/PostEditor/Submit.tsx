import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function Submit({
  children,
  isInvalid,
}: {
  children: ReactNode;
  isInvalid: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="ml-auto" disabled={isInvalid || pending}>
      {pending ? <Spinner /> : null}
      {pending ? "Uploading..." : children}
    </Button>
  );
}
