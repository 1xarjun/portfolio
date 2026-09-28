import { SlSocialLinkedin } from "react-icons/sl";
import { buttonVariants } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-30 mb-10 z-10">
      <Card className="bg-background/30 backdrop-blur-md ring-0 rounded-none px-8 py-5">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-base text-muted-foreground font-normal">
            Let&apos;s build something great together — arjunbanerjee13@gmail.com
          </CardTitle>
          <CardDescription className="flex gap-2 items-center">
            <a
              href="https://github.com/1xarjun"
              className={buttonVariants({ variant: "secondary", size: "icon" })}
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/"
              className={buttonVariants({ variant: "secondary", size: "icon" })}
            >
              <SlSocialLinkedin />
            </a>
          </CardDescription>
        </CardHeader>
      </Card>
    </footer>
  );
}
