import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";

export default function Theme({ mounted }: { mounted: boolean }) {
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <Button
        disabled
        size="icon-lg"
        className="rounded-full text-foreground bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700!"
      />
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            size="icon-lg"
            className="rounded-full text-foreground bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700!"
          >
            {theme === "light" ? (
              <Sun />
            ) : theme === "dark" ? (
              <Moon />
            ) : (
              <Monitor />
            )}
          </Button>
        }
      />

      <DropdownMenuContent className="bg-background text-foreground">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
