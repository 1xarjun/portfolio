import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import projects from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug)

  return {
    title: project?.name,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  return (
    <div>
      <div className="text-foreground/90">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-foreground">
            {project?.name}
          </h1>
          <p className="text-muted-foreground">{project?.description}</p>
        </div>

        <div className="mt-8 flex gap-4 items-center">
          <a
            href={project?.url}
            className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
          >
            Live Demo
            <ArrowUpRight />
          </a>

          <a
            href={project?.github_url}
            className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
          >
            1xarjun/{project?.slug}
            <ArrowUpRight />
          </a>
        </div>

        <div className="border border-border rounded-lg overflow-hidden mt-10 w-full relative aspect-video">
          <Image
            loading="eager"
            placeholder="blur"
            src={project?.thumbnail || ""}
            alt={project?.name || "Project Thumbnail"}
            className="object-center object-cover"
            quality={100}
	    fill
          />
        </div>

        <p className="mt-10 leading-relaxed">
          {project?.short_note || "short note"}
        </p>
      </div>
    </div>
  );
}
