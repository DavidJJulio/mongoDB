import {connect} from './helper/db/connect.js';
import { movies } from './js/module/movies.js';


// let obj2 = new connect("Carlos")
// console.log(obj2)
let mongo = new movies()
console.log(console.table(await mongo.getAllMovies()));