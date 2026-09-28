import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import projects from "@/data/projects";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects",
  };
}

export default function ProjectsPage() {

  return (
    <div>
      <div className="space-y-14 text-foreground/80">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            A curated list of my projects. Only the ones I&apos;m proud of.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <Card
              key={i}
              className="col-span-1 rounded-2xl bg-background transition-all duration-300 py-0 gap-0 p-2 pb-0 hover:ring-2"
            >
              <Link href={`/projects/${p.slug}`}>
                <CardContent className="p-0 border border-border rounded-xl overflow-hidden relative aspect-video">
                  <Image
                    loading="lazy"
                    placeholder="blur"
                    className="object-cover object-center hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    src={p.thumbnail}
                    alt={p.name}
                    fill
                  />
                </CardContent>
              </Link>
              <CardFooter className="flex justify-between items-center bg-background px-2 border-none">
                <CardTitle>{p.name}</CardTitle>
                <CardDescription className="flex items-center [&_svg]:size-4">
                  <a
                    target="_blank"
                    className={buttonVariants({ variant: "link" })}
                    href={p.github_url}
                  >
                    <SiGithub />
                  </a>
                  <a
                    target="_blank"
                    className={buttonVariants({ variant: "link" })}
                    href={p.url}
                  >
                    <ArrowUpRight />
                  </a>
                </CardDescription>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
