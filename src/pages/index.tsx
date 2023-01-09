import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { getAllPostMetadata } from '@/features/posts/lib/get';
import { Posts } from '@/features/posts/components/Posts';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const IndexPage: NextPage<Props> = ({posts}) => {
  return (
    <>
      <Posts posts={posts}></Posts>
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPostMetadata();
  return {
    props: {
      posts
    }
  };
};

export default IndexPage;
