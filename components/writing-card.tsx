import Link from "next/link";
import { Icon } from "@/components/icon";
import type { WritingEntry } from "@/data/portfolio";

export function WritingCard({ entry }: { entry: WritingEntry }) {
  const action = entry.external ? (
    <a href={entry.href} target="_blank" rel="noopener noreferrer" className="writing-card-action">
      Read article <span>Published on {entry.publication ?? "an external publication"}</span> <Icon name="arrow-up-right" className="size-4" />
    </a>
  ) : (
    <Link href={entry.href} className="writing-card-action">
      Read article <Icon name="arrow-up-right" className="size-4" />
    </Link>
  );

  return <article className="writing-entry-card"><div className="writing-entry-card-topline"><span>{entry.external ? "External publication" : "Pulasthi Aberathne"}</span><span>{entry.external ? `Published on ${entry.publication ?? "external site"}` : "On pulasthiabey.dev"}</span></div><h2>{entry.title}</h2><p>{entry.description}</p><div className="tag-list">{entry.topics.map((topic) => <span className="tag" key={topic}>{topic}</span>)}</div>{action}</article>;
}
