import { connect } from "../../helper/db/connect.js";


export class movies extends connect {
    static instance; 
    constructor() {
        if(typeof movies.instance === "object") {
            return movies.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movies.instance = this;
        return this;
    }

    async getAllMovies(){
        let res = await this.collection.aggregate().toArray();
        return res
    }
}