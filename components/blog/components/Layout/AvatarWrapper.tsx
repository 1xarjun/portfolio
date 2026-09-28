"use client";

// import { useTransition } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { logOut, login } from "@/actions/auth";
import { User } from "@/blog-types";
import { ChevronDown, LogIn, LogOut } from "lucide-react";

export default function AvatarWrapper({ user }: { user: User | null }) {
  // const [isLoading, startTransition] = useTransition();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost">
            {user ? (user.name ?? user.login) : "Profile"}
            <ChevronDown />
          </Button>
        }
      />
      <DropdownMenuContent aria-label="Profile Actions">
        <DropdownMenuGroup>
          {user ? (
            <>
              <DropdownMenuLabel className="flex flex-col gap-2">
                <span className="text-xs font-normal text-muted-foreground">
                  Signed in as
                </span>
                <span className="text-sm text-foreground">{user.login}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                key="logout"
                variant="destructive"
                onClick={async () => {
                  await logOut();
                }}
              >
                <LogOut /> Sign Out
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem
              key="login"
              onClick={async () => await login(pathname)}
            >
              <LogIn /> Sign In
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
