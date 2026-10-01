"use client"

import { toast } from "sonner"
import socialLinks from "@/data/social-links"
import { ArrowUpRight } from "lucide-react"

export default function Socials() {

	const handleTwitterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		toast.error("Sorry, I don't have a X account!");
	}

	return (
		<div className="flex flex-col gap-2">
		{socialLinks.map(({ label, icon, href }) => {
			const Icon = icon;
			return (
				<a
				onClick={label==="X" ? handleTwitterClick : undefined}
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

	);
}
