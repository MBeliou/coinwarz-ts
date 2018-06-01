import fetch from "node-fetch";

export default class Coinwarz {
    apiKey: string;
    urlBase: string = "http://www.coinwarz.com/v1/api/";

    constructor(apiKey: string){
        this.apiKey = apiKey;
    }

    async infoKey(){
        const url = `${this.urlBase}apikeyinfo/?apikey=${this.apiKey}`;
        try {
            let ret = await this.queryURL(url);
            return ret;
        } catch (e) {
            console.log('Error', e);
        }
    }

    async miningProfitability(){
        const url = `${this.urlBase}profitability/?apikey=${this.apiKey}&algo=all`;
        try {
            let ret = await this.queryURL(url);
            return ret;
        } catch (e) {
            console.log('Error', e)
        }
    }

    async coinInformation(coinTag: string = "BTC"){
        const url = `${this.urlBase}coininformation/?apikey=${this.apiKey}&coinTag=${coinTag}`
        try {
            let ret = await this.queryURL(url);
            return ret;
        } catch(e) {
            console.log("Error", e);
        }
    }

    async queryURL(url: string){
        let resp = await fetch(url);
        let data = await resp.json();
        return data
    }
}