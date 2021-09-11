export class Post {
    public uuid: string;
    public title: string;
    public author: string;
    public published: string;
    public heroImg: string;
    public body: string;

    constructor(uuid: string, title: string, author: string, published: string, heroImg: string, body: string){
        this.uuid = uuid;
        this.title = title;
        this.author = author;
        this.published = published;
        this.heroImg = heroImg;
        this.body = body;

    }
}


