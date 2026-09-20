# Publishing a first-party blog article

Blog metadata lives in `lib/blog.ts`. External publications use the `ExternalBlogPost` shape and keep their verified external URL. First-party posts use `InternalBlogPost` and require a unique `slug`, real ISO `publishedAt` date, and a content component.

To publish an original article:

1. Create an article content component in a small content directory, such as `content/blog/`, using semantic HTML inside the `blog-article` layout styles.
2. Add an `InternalBlogPost` entry to `blogPosts` in `lib/blog.ts`, importing the content component and adding only real metadata. Optional `updatedAt`, `readingTime`, `image`, `relatedSlugs`, and `relatedWork` values should be added only when factual and intentional.
3. The `/blog/[slug]` route, article metadata, BlogPosting JSON-LD, and sitemap entry are generated from that registry. Unknown slugs return the blog 404 page.
4. Add any article images to `public/` with descriptive alt text and intrinsic dimensions when rendered with `next/image`.
5. Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `git diff --check`. If the local Turbopack sandbox restriction occurs, verify with `npx next build --webpack`.

The current Medium article remains an external entry and is not copied into the site, emitted as local article structured data, added to the local sitemap, or included in an RSS feed. RSS is intentionally deferred until the first real first-party article exists; no `/rss.xml` route is advertised yet.
