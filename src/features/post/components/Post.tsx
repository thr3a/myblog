import 'zenn-content-css';
import { Title, Anchor } from '@mantine/core';
import markdownToHtml from 'zenn-markdown-html';
import type { PostProps } from '@/features/post/type';
import { useEffect, useState } from 'react';
import { artcleUrl } from '@/features/post/lib/get';
import dayjs from 'dayjs';

export const Post = ({...props}: PostProps) => {
  const [html, setHtml] = useState('読込中');
  const markdown = props.content;
  useEffect(() => setHtml(markdownToHtml(markdown)), []);
  return (
    <>
      <Title order={2}>
        <Anchor href={artcleUrl(props)}>{ props.title }</Anchor>
      </Title>
      <p>{dayjs(props.date).format('YYYY年MM月DD日')}</p>
      <article className='znc' dangerouslySetInnerHTML={{__html: html}}></article>
    </>
  );
};
