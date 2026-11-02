import { Source } from './source';
import { Article } from './article';

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
