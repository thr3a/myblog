export type PostMetaProps = {
  id: string;
  title: string;
  date: string;
}

export type PostProps = PostMetaProps & {
  content: string;  
}
