import {InMemoryDbService} from "angular-in-memory-web-api"
import { Book } from "./book"
export class Testdata  implements InMemoryDbService{
    createDb(){
        let  bookDetails:Book[]=[
            {id: 100, name: "Angular 10", category: "Angular Book"}, 
            {id: 101, name: "React Js", category: "React Book"}
        ];
        return {books: bookDetails};
    }
}
