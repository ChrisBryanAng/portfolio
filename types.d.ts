export interface IWork {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
  projectLink: string;
  githubLink: string;
  tags: string[];
}

export interface ISidebar {
  toggleSidebar: () => void;
}
