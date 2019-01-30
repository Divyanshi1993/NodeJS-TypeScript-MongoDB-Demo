import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

class App {
    public app : express.Application=express();
    public routePrv: Routes = new Routes();
    //public mongoUrl: string = 'mongodb://localhost:27017/CRMdb';
    public mongoUrl : string = process.env.MONGODB_URI;  

    constructor(){
    this.config();    
    this.mongoSetup();
    this.routePrv.routes(this.app); 
    }

    private mongoSetup(): void{
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl,{useNewUrlParser: true});    
    }

    private config():void{
        this.app.use(bodyParser.json);
        this.app.use(bodyParser.urlencoded({extended:false}));
    }

}
export default new App().app;