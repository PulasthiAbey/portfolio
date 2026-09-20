import Link from "next/link";
import { Icon } from "@/components/icon";
import { getBlogPostHref, type BlogPost } from "@/lib/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  const action = post.kind === "external" ? (
    <a href={getBlogPostHref(post)} target="_blank" rel="noopener noreferrer" className="writing-card-action">
      Read on {post.publication} <span>Published on {post.publication}</span> <Icon name="arrow-up-right" className="size-4" />
    </a>
  ) : (
    <Link href={getBlogPostHref(post)} className="writing-card-action">
      Read article <Icon name="arrow-up-right" className="size-4" />
    </Link>
  );

  return <article className="writing-entry-card"><div className="writing-entry-card-topline"><span>{post.topics.join(" · ")}</span><span>{post.kind === "external" ? `Published on ${post.publication}` : "Pulasthi Aberathne"}</span></div><h2>{post.title}</h2><p>{post.description}</p><div className="tag-list">{post.topics.map((topic) => <span className="tag" key={topic}>{topic}</span>)}</div>{action}</article>;
}
