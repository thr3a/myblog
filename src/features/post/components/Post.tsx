import 'zenn-content-css';
import { Title, Box } from '@mantine/core';
import markdownToHtml from 'zenn-markdown-html';
import type { PostProps } from '@/features/post/type';

export const Post = ({...props}: PostProps) => {
  const html = markdownToHtml(props.content);
  return (
    <>
      <Title order={1}>{ props.title }</Title>
      <p>{props.date}</p>
      <Box className='znc' dangerouslySetInnerHTML={{__html: html}}></Box>
    </>
  );
};
