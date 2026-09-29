import { buttonVariants } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import socialLinks from "@/data/social-links"

export default function Footer() {

  const footerLinks = socialLinks.filter(s => s.label.toLowerCase().includes("github") || s.label.toLowerCase().includes("linkedin"))

  return (
    <footer className="mt-30 mb-10 z-10">
      <Card className="bg-background/30 backdrop-blur-md ring-0 rounded-none px-8 py-5">
        <CardHeader className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
          <CardTitle className="text-base text-muted-foreground font-normal">
            Let&apos;s build something great together — arjunbanerjee13@gmail.com
          </CardTitle>
          <CardDescription className="flex gap-2 items-center">
            {footerLinks.map(foo => {
              const Icon = foo.icon;
              return (
                <a
                  key={`${foo.label}-${foo.href}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={foo.href}
                  className={buttonVariants({ variant: "secondary", size: "icon" })}
                >
                  <Icon />
                </a>
              )
            })}
          </CardDescription>
        </CardHeader>
      </Card>
    </footer>
  );
}
