import {Film} from '../../types/film';

export type FilmCardProps = Film & {
  setId: (id: number) => void;
  idState: number;
}
