export type PostMetaProps = {
  id: string;
  title: string;
  date: string;
  url: string;
}

export type PostProps = PostMetaProps & {
  content: string;  
}
