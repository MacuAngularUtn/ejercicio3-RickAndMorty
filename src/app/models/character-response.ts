import { Character } from "./character";
import { Pagination } from "./pagination";

export interface CharacterResponse {   
    info:   Pagination;
    results: Character[];
}
