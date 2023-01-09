import 'zenn-content-css';
import { Title } from '@mantine/core';
import markdownToHtml from 'zenn-markdown-html';
import type { PostProps } from '@/features/post/type';
import { useEffect, useState } from 'react';

export const Post = ({...props}: PostProps) => {
  const [html, setHtml] = useState('blue');
  const markdown = props.content;
  useEffect(() => setHtml(markdownToHtml(markdown)), []);
  return (
    <>
      <Title order={1}>{ props.title }</Title>
      <p>{props.date}</p>
      <article className='znc' dangerouslySetInnerHTML={{__html: html}}></article>
    </>
  );
};
