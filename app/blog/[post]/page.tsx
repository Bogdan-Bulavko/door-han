export default function PostPage({
  params,
}: {
  params: { slug: string; title: string };
}) {
  return (
    <article>
      <h1>Статья: {params.title}</h1>
      <p>Это контент поста с динамическим именем.</p>
      <p>Вы находитесь на: /blog/{params.slug}</p>
    </article>
  );
}
