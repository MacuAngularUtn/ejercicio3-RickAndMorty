import { Episode } from "./episode";
import { Pagination } from "./pagination";

export interface EpisodeResponse {  
    info:   Pagination;
    results: Episode[];
}
