import { Thumbnail } from './thumbnail.model';
import { Comic } from './comic.model';
import { Serie } from './serie.model';
import { Story } from './story.model';
import { Url } from './url.model';

export class Card {

    id?: number;
    name?: string;
    description?: string;
    modified?: string;
    thumbnail?: Thumbnail;
    resourceURI?: string;
    comics?: Comic;
    series?: Serie;
    stories?: Story;
    events?: Event;
    urls?: Url [];
    
}