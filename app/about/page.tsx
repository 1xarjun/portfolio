import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
  };
}

export default function AboutPage() {
  return (
    <div>
      <div className="space-y-14 leading-relaxed text-foreground/90">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">About</h1>
          <p className="text-muted-foreground">
            Hi, I&apos;m Arjun Banerjee, a self-taught full-stack web developer
            passionate about building meaningful, user-focused web applications.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Who am I</h2>
          <div className="space-y-4">
            <p>
              I&apos;m a Fullstack Web Developer based in Bankura, India (Open
              to relocation). Familiar with the MERN stack and currently
              learning Next.js, TypeScript, Tailwind CSS, and modern web
              development practices.
            </p>

            <p>
              I started learning web development in my second year while
              pursuing a BSc (Hons.) in Computer Science. In the beginning, I
              learned through tutorials and a few online courses. Over time, I
              found that building real projects is a far more effective way to
              learn, so I shifted my focus to creating modern web applications
              and learning through hands-on experience.
            </p>

            <p>
              I build web applications with both the MERN stack and Next.js. For
              MERN projects, I use MongoDB Atlas for the database, Render for
              the backend, and Vercel for the React frontend. For Next.js
              projects, I usually deploy everything on Vercel. I use GitHub to
              manage the code for all my projects.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            About this site
          </h2>
          <div className="pl-4">
            <ul className="list-disc space-y-3">
              <li>
                Framework:{" "}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 font-medium"
                >
                  Next.js
                </a>
              </li>
              <li>
                Deployment:{" "}
                <a
                  href="https://vercel.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 font-medium"
                >
                  Vercel
                </a>
              </li>
              <li>
                Styling:{" "}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 font-medium"
                >
                  TailwindCSS
                </a>
              </li>
              <li>
                Components:{" "}
                <a
                  href="https://ui.shadcn.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 font-medium"
                >
                  shadcn/ui
                </a>
              </li>
            </ul>
          </div>

          <p>
            This site is visually inspired by{" "}
            <a
              href="https://nelsonlai.dev/"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 font-medium"
            >
              this site
            </a>
            . Everything was built from scratch except the blog section, which
            is based on{" "}
            <a
              href="https://github.com/m4xshen/github-issue-blog"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 font-medium"
            >
              github-issue-blog
            </a>{" "}
            and has been modified to suit my needs.
          </p>
        </div>
      </div>
    </div>
  );
}
