import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { GetStaticPaths } from 'next';
import { getPostData } from '@/features/post/lib/get';
import { getAllPostIds } from '@/features/posts/lib/get';
import { Post } from '@/features/post/components/Post';
import Head from 'next/head';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PostPage: NextPage<Props> = ({postData}) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Post {...postData}></Post>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const { params } = context;
  if (params === undefined) {
    throw new Error('e');
  }
  const id = [params.date, params.id].join('/');
  const postData = getPostData(id);
  return {
    props: {
      postData
    }
  };
};

export default PostPage;
