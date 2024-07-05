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

    //1. Buscar películas del género "Accion":
    async getAccionMovies(){
        let res = await this.collection.find({genre: "Accion"}).toArray();
        return res
    }

    //2. Buscar películas con más de 200 copias en formato "Bluray":
    async getBluray200(){
        let res = await this.collection.find({$and: [{"format.name": "Bluray"},{"format.copies": {$gt: 200}}]}, {projection: {}}).toArray();
        return res
    }

    //3. Buscar películas donde el valor del formato "dvd" sea menor que 10:
    async getDvDLower10(){
        let res = await this.collection.find({format: {$elemMatch:{$and: [{name: {$eq: "dvd"}},{value:{$lt: 10}}]}}}).toArray();
        return res
    }

    //4. Buscar películas con un personaje apodado "Cobb":
    async getCobb(){
        let res = await this.collection.find({"character.apodo": "Cobb"}).toArray();
        return res[0]
    }
}
