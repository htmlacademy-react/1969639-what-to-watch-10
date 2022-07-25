export type Film = {
  id: number;
  src: string;
  href: string;
  filmName: string;
};

export type Comment = {
  id: number;
  text: string[];
};

export type Films = Film[];

export type Comments = Comment[];

export type FilmOne = {
  title: string;
  genre: string;
  year: number;
  src: string;
  alt: string;
};
