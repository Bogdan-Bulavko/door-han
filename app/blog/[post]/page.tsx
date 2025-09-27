export default async function PostPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug, title } = await searchParams;
  console.log(slug, title);
  return (
    <article>
      <h1>Статья: {title}</h1>
      <p>Это контент поста с динамическим именем.</p>
      <p>Вы находитесь на: /blog/{slug}</p>
    </article>
  );
}
