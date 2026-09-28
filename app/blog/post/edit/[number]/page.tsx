import { redirect } from 'next/navigation';
import PostEditor from '@/components/blog/components/PostEditor/index';
import { updatePost } from '@/actions/post';
import { getPost } from '@/blog-utils/post';
import { isAuthor } from '@/blog-utils/auth';

export default async function EditPost({
  params,
}: {
  params: { number: string };
  }) {
  const { number } = await params;
  const integer = parseInt(number);
  const post = await getPost(integer);

  if (!(await isAuthor()) || !integer) {
    redirect('/');
  }

  return (
    <PostEditor
      initTitle={post.title}
      initBody={post.body!}
      pageHeading={"Edit Post"}
      pageDescription={false}
      actionName="Update"
      action={updatePost.bind(null, integer)}
    />
  );
}
