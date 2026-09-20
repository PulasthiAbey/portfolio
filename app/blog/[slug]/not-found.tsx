import Link from "next/link";

export default function BlogArticleNotFound() {
  return <main className="blog-article-page"><div className="container blog-article-shell"><section className="blog-article-header"><p className="section-kicker">Blog</p><h1>Article not found</h1><p className="blog-article-deck">That article does not exist or is not published yet.</p><Link className="button button-secondary" href="/blog">Back to Blog</Link></section></div></main>;
}
