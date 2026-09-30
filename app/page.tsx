import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FiHelpCircle, FiList } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import { BsBriefcase, BsLink45Deg } from "react-icons/bs";
import projects from "@/data/projects";
import stacks from "@/data/stacks";
import socialLinks from "@/data/social-links";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import JobStatus from "@/components/job-status";

export default function Page() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <div className="flex flex-col-reverse gap-8 sm:gap-6 sm:grid grid-cols-4">
<div className="col-span-3 flex flex-col gap-4">
          <JobStatus />
          <h1 className="text-3xl sm:text-4xl font-bold text-balance text-center sm:text-left">
            Hi, I&apos;m Arjun
          </h1>
          <p className="text-base text-muted-foreground">
            Wannabe fullstack developer from bankura. Likes to tinker with computers. Very active on the socials.
          </p>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Avatar className="size-36 ring-4 ring-border">
            <AvatarImage loading="eager" src="/image/kiyo.jpg" alt="avatar" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-30">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
          {featuredProjects.map((p, i) => (
            <Card
              key={i}
              className="col-span-1 rounded-2xl bg-background transition-all duration-300 py-0 gap-0 p-2 pb-0 hover:ring-2"
            >
              <Link href={`/projects/${p.slug}`}>
                <CardContent className="p-0 border border-border overflow-hidden rounded-xl relative aspect-video">
                  <Image
                    loading="lazy"
                    placeholder="blur"
                    className="object-cover object-center hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    src={p.thumbnail}
                    alt={p.name}
		    quality={100}
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

        <Link
          href="projects"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
            }),
            "max-w-fit mx-auto mt-7 rounded-full px-4",
          )}
        >
          See more
        </Link>
      </div>

      <div className="mt-20 flex flex-col">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">About Me</h2>

        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-5 gap-4 mt-14">
          <Card className="col-span-1 sm:col-span-2 bg-background transition-all duration-300 group rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2.5 text-foreground text-base font-semibold">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-neutral-50 group-hover:bg-neutral-100 dark:bg-neutral-900 dark:group-hover:bg-neutral-800 text-foreground text-sm transition-colors">
                  <VscCode />
                </span>
                About
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground leading-relaxed">
                Fresher developer with 2+ years of hands-on experience building
                fullstack projects. Learning through building real applications.
              </p>
            </CardContent>
          </Card>

          <Card className="col-span-1 sm:col-span-3 bg-background transition-all duration-300 group rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2.5 text-foreground text-base font-semibold">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-neutral-50 group-hover:bg-neutral-100 dark:bg-neutral-900 dark:group-hover:bg-neutral-800 text-foreground text-sm transition-colors">
                  <BsBriefcase />
                </span>
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className=" text-muted-foreground leading-relaxed">
                Worked on learning and building personal fullstack projects for
                2+ years. Gained practical knowledge in web development.
              </p>
              {/* Timeline accent */}
              <div className="flex flex-col gap-2.5">
                {[
                  {
                    year: "2024 – Present",
                    label: "Fullstack Projects",
                    note: "React · Next.js · Supabase",
                  },
                  {
                    year: "2023 – 2024",
                    label: "Frontend Development",
                    note: "HTML · CSS · JavaScript",
                  },
                ].map((item) => (
                  <div
                    key={item.year}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-muted-foreground font-mono shrink-0">
                      {item.year}
                    </span>
                    <p className="text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 sm:col-span-3 bg-background transition-all duration-300 group rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2.5 text-foreground text-base font-semibold">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-neutral-50 group-hover:bg-neutral-100 dark:bg-neutral-900 dark:group-hover:bg-neutral-800 text-foreground text-sm transition-colors">
                  <FiList />
                </span>
                Tech Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {stacks.map(({ name, icon }) => {
                  const Icon = icon;
                  return (
                    <div
                      key={name}
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                        }),
                        "rounded-full text-muted-foreground hover:text-foreground hover:scale-110 transition-transform duration-200 bg-transparent!",
                      )}
                    >
                      <Icon />
                      {name}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 sm:col-span-2 bg-background transition-all duration-300 group rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2.5 text-foreground text-base font-semibold">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-neutral-50 group-hover:bg-neutral-100 dark:bg-neutral-900 dark:group-hover:bg-neutral-800 text-foreground text-sm
                 transition-colors"
                >
                  <BsLink45Deg />
                </span>
                Social Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {socialLinks.map(({ label, icon, href }) => {
                  const Icon = icon;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-[#222] transition-colors duration-300 group/link overflow-hidden"
                    >
                      <span className="text-base">
                        <Icon />
                      </span>
                      <span className="font-medium">{label}</span>
                      <span className="ml-auto group-hover/link:text-foreground/70 [&_svg]:size-4 transition-colors">
                        <ArrowUpRight className="translate-y-10 group-hover/link:translate-y-0 transition-transform duration-300" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <Link
          href="about"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
            }),
            "max-w-fit mx-auto mt-7 rounded-full px-4",
          )}
        >
          Know more
        </Link>
      </div>

      <div className="mt-20">
        <Card className="bg-transparent text-foreground grid grid-cols-1 sm:grid-cols-3 grid-rows-2 sm:grid-rows-1 rounded-2xl p-0">
          <CardHeader className="order-1 col-span-1 sm:col-span-2 sm:flex-1 rounded-none pt-1 px-6 pb-6 sm:p-8">
            <CardTitle className="text-xl sm:text-2xl">
              Have questions about my projects?
            </CardTitle>
            <CardDescription className="text-base inline-flex flex-col gap-4">
              Feel free to reach out!
              <a
                href="mailto:arjunbanerjee13@gmail.com?subject=Hello&&body=Nice to meet you."
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full self-start text-sm bg-background text-foreground",
                )}
              >
                Contact Me
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="-order-1 col-span-1 pt-6 px-6 pb-1 sm:p-6">
            <div className="flex justify-center items-center h-full text-foreground text-5xl bg-muted dark:bg-input/10 border border-border rounded-2xl text-center">
              <FiHelpCircle />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
