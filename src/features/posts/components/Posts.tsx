import type { PostMetaProps } from '@/features/post/type';
import { Title, Group, Anchor } from '@mantine/core';
import { artcleUrl } from '@/features/post/lib/get';

export const Posts = ({posts}: {posts: PostMetaProps[]}) => {
  return (
    <>
      {posts.map((x) => (
        <Group key={x.id}>
          <Title order={3}><Anchor href={artcleUrl(x)}>{x.title}</Anchor></Title>
        </Group>
      ))}
    </>
  );
};
