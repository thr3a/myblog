import fg from "fast-glob";

export const getAllPostIds = () => {
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
