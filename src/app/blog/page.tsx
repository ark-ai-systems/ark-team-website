import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { getAllPosts } from "@/lib/posts";

const description =
  "Practical writing on getting real results from AI in a small business.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  openGraph: {
    title: "Ark Team | Blog",
    description,
    images: ["/og-image.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-4">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="text-[34px] font-normal leading-[1.16] tracking-[-0.015em] sm:text-[46px]">
          Notes from the work.
        </h1>
        <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary sm:text-xl">
          Practical writing on getting real results from AI in a small
          business.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="flex flex-col gap-4 border border-border bg-surface px-8 py-16 text-center">
          <p className="text-2xl font-normal tracking-[-0.015em]">
            First posts coming soon.
          </p>
          <p className="text-lg text-text-secondary">
            Want to hear when we publish?{" "}
            <Link href="/contact" className="text-accent hover:text-text">
              Talk to us about your business.
            </Link>
          </p>
        </div>
      ) : (
        <ul className="flex flex-col divide-y divide-border border-t border-border">
          {posts.map((post) => (
            <li key={post.slug} className="flex flex-col gap-2 py-8">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                {post.date}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl tracking-[-0.01em] hover:text-accent"
              >
                {post.title}
              </Link>
              <p className="text-lg leading-[1.62] text-text-secondary">
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
