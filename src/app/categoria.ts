import { Musica } from "./musica";

export interface Categoria {
    id: number;
    name: string;
    musics?: Musica[];
    numberOfMusics?: number;
}