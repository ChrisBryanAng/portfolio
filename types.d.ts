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

export interface ITestimonial {
  _id: string;
  name: string;
  company: string;
  imageurl: string;
  message: string;
}
