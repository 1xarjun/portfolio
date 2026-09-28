import { redirect } from 'next/navigation';
import PostEditor from '@/components/blog/components/PostEditor/index';
import { createPost } from '@/actions/post';
import { isAuthor } from '@/blog-utils/auth';

export default async function NewPost() {
  if (!(await isAuthor())) {
    redirect('/');
  }

  return (
    <PostEditor
      initTitle=""
      initBody=""
      actionName="Publish"
      action={createPost}
      pageHeading="Create new blog"
      pageDescription={true}
    />
  );
}
