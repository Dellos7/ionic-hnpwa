
export class Item {
    id: number;
    title: string;
    points: number;
    user: string;
    time: number;
    time_ago: string;
    comments_count: number;
    type: string;
    url: string;
    domain: string;

    constructor(     
        id: number,
        title: string,
        points: number,
        user: string,
        time: number,
        time_ago: string,
        comments_count: number,
        type: string,
        url: string,
        domain: string ) {
            this.id = id;
            this.title = title;
            this.points = points;
            this.user = user;
            this.time = time;
            this.time_ago = time_ago;
            this.comments_count = comments_count;
            this.type = type;
            this.url = url;
            this.domain = domain;
        }
}