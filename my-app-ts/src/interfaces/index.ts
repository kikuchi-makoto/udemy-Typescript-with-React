export type Dispatch = React.Dispatch<IAction> | any;

export interface IState {
  episodes: IEpisode[];
  favorites: IEpisode[];
}

export interface IAction {
  type: string;
  payload: IEpisode[] | any;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IEpisodeProps {
  episodes: IEpisode[];
  store: { state: IState, dispatch: Dispatch };
  toggleFavoriteAction: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction;
  favorites: IEpisode[];
}
