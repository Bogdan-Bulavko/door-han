import Link from 'next/link';

export default function Blog() {
  const posts = [
    { slug: 'kak-nauchitsya-react', title: 'Как научиться React' },
    { slug: 'soveti-dlya-novichkov', title: 'Советы для новичков' },
  ];
  return (
    <div>
      <h1>Все статьи</h1>
      <p>Здесь будут отображаться посты из блога.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            {/* Вот здесь мы "переходим" в [slug] */}
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
