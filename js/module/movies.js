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
    //12. Buscar películas con más de 200 copias en formato "Bluray":  
    async getBluray200(){
        let res = await this.collection.find({$and: [{"format.name": "Bluray"},{"format.copies": {$gt: 200}}]}, {projection: {}}).toArray();
        return res
    }

    //3. Buscar películas donde el valor del formato "dvd" sea menor que 10:
    //13. Buscar películas donde el valor del formato "dvd" sea menor que 10:
    async getDvDLower10(){
        let res = await this.collection.find({format: {$elemMatch:{$and: [{name: {$eq: "dvd"}},{value:{$lt: 10}}]}}}).toArray();
        return res
    }

    //4. Buscar películas con un personaje apodado "Cobb":
    async getCobb(){
        let res = await this.collection.find({"character.apodo": "Cobb"}).toArray();
        return res[0]
    }

    //5. Buscar películas con actores de id 2 y 3:
    async getActor2And3(){
        let res = await this.collection.find({"character.id_actor": {$in: [2,3]}}).toArray();
        return res
    }

    //6. Buscar películas que tengan el formato "Bluray":
    async getBluray(){
        let res = await this.collection.find({"format.name": "Bluray"}).toArray();
        return res
    }

    //7. Buscar películas con el género "Ciencia Ficción":
    async getCienciaFiccion(){
        let res = await this.collection.find({genre: "Ciencia Ficción"}).toArray();
        return res
    }

    //8. Buscar películas con un rol principal llamado "Miguel":
    //15. Buscar películas con un rol principal y un apodo "Miguel":
    async getPrincipalMiguel(){
        let res = await this.collection.find({$and: [{"character.rol": "principal"},{"character.apodo": "Miguel"}]}).toArray();
        return res[0]
    }

    //9. Buscar películas que tengan al menos un formato con más de 100 copias:
    async getCopiesAbove100(){
        let res = await this.collection.find({"format.copies": {$gt: 100}}).toArray();
        return res
    }

    //10. Buscar películas con un actor con id_actor 1:
    async getActor1(){
        let res = await this.collection.find({"character.id_actor": 1}).toArray();
        return res
    }

    //11. Buscar películas con un personaje principal apodado "Cobb":
    async getPrincipalCobb(){
        let res = await this.collection.find({$and: [{"character.rol": "principal"},{"character.apodo": "Cobb"}]}).toArray();
        return res[0]
    }

    //14. Buscar películas con un personaje secundario apodado "Arthur":
    async getSecundaryArthur(){
        let res = await this.collection.find({$and: [{"character.rol": "secundario"},{"character.apodo": "Arthur"}]}).toArray();
        return res[0]
    }
}
