import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `Ark Team | ${post.title}`,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto flex max-w-[640px] flex-col gap-8 px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
          {post.date}
        </span>
        <h1 className="text-[34px] font-normal leading-[1.2] tracking-[-0.015em] sm:text-[40px]">
          {post.title}
        </h1>
      </div>
      <div className="flex flex-col gap-6 text-lg leading-[1.7] text-text-secondary">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <Link
        href="/blog"
        className="font-mono text-sm uppercase tracking-[0.14em] text-accent hover:text-text"
      >
        Back to blog
      </Link>
    </article>
  );
}
