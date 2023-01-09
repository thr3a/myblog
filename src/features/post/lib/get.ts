import path from 'path';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import type { PostProps, PostMetaProps } from '@/features/post/type';

export const getPostData = (id: string): PostProps => {
  const filePath = path.join(process.cwd(), 'contents', 'posts', `${id}.md`);
  const fileContent = readFileSync(filePath, 'utf8');

  const {data, content} = matter(fileContent);
  const {Title: title, Date: date} = data;
  return {
    id,
    title,
    date: (data.Date).toISOString() || null,
    content,
    url: data.URL
  };
};

export const artcleUrl = (x: PostMetaProps): string => {
  const array = x.url.split('/');
  return [array[3], array[4], array[5]].join('/');
};
