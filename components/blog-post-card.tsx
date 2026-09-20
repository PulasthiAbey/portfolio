import Link from "next/link";
import { Icon } from "@/components/icon";
import type { BlogPost } from "@/data/portfolio";

export function BlogPostCard({ post }: { post: BlogPost }) {
  const action = post.external ? (
    <a href={post.href} target="_blank" rel="noopener noreferrer" className="writing-card-action">
      Read on {post.publication ?? "external publication"} <span>Published on {post.publication ?? "an external publication"}</span> <Icon name="arrow-up-right" className="size-4" />
    </a>
  ) : (
    <Link href={post.href} className="writing-card-action">
      Read article <Icon name="arrow-up-right" className="size-4" />
    </Link>
  );

  return <article className="writing-entry-card"><div className="writing-entry-card-topline"><span>{post.external ? "External publication" : "Pulasthi Aberathne"}</span><span>{post.external ? `Published on ${post.publication ?? "external site"}` : "On pulasthiabey.dev"}</span></div><h2>{post.title}</h2><p>{post.description}</p><div className="tag-list">{post.topics.map((topic) => <span className="tag" key={topic}>{topic}</span>)}</div>{action}</article>;
}
