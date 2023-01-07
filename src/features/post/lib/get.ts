import path from 'path';
import { readFileSync } from 'fs';
import glob from "fast-glob";
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
    date: date.toString(),
    content
  };
};

// export const getAllPostInfos = async () => {
//   const fileNames = glob.sync('contents/posts/**/*.md');
//   return fileNames.map(fileName => {
//     const fileContent = readFileSync(fileName, 'utf8');
//     const {data: PostMetaProps[] } = matter(fileContent);
//     return {
//       ...(data as PostMetaProps)
//     };
//   });
// };
