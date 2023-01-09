import fg from "fast-glob";
import type { PostMetaProps } from '@/features/post/type';
import { readFileSync } from 'fs';
import matter from 'gray-matter';

type paramsProps = {
  date: string;
  id: string;
}

export const getAllPostIds = (): {params: paramsProps}[] => {
  const fileNames = fg.sync('contents/posts/**/*.md');
  return fileNames.map(fileName => {
    const array = fileName.split('/');
    return {
      params: {
        date: array[2],
        id: array[3].replace(/\.md$/, '')
      }
    };
  });
};

export const getAllPostMetadata = (): PostMetaProps[] => {
  const fileNames = fg.sync('contents/posts/**/*.md');
  return fileNames.map(fileName => {
    const array = fileName.split('/');
    const fileContent = readFileSync(fileName, 'utf8');
    const {data} = matter(fileContent);
    return {
      id: array[3].replace(/\.md$/, ''),
      title: data.Title,
      date: (data.Date).toISOString() || null,
      url: data.URL
    };
  });
};

