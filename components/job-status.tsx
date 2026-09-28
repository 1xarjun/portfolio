"use client"

export default function JobStatus() {
  return (
    <div
      onClick={(e) => { e.currentTarget.hidden = true; }}
      className="text-xs text-muted-foreground border border-border bg-background/30 rounded-full max-w-fit px-3.5 py-1.5 flex gap-2 items-center font-medium backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-green-400 animate-pulse"></span>
      <span>Open to work</span>
      &bull;
      <span>Full-time & Contract</span>
    </div>
  )
}
