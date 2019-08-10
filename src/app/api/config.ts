export class Config {
    constructor(){
        this.url = "https://gateway.marvel.com:443/v1/public/characters?" +
                    // "nameStartsWith=iron&" +
                    "apikey=e266cc910eae8576433c55d8a518ca9d&" +
                    "hash=79218cb3aebd26df28e7064911cd91e6&" +
                    "ts=2019-08-10T18:30:58.353Z";
    }

    url?:string;
}