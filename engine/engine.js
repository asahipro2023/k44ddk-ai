import { loadKnowledge } from "./loader.js";

export default class Engine {

    constructor() {

        this.data = [];

    }

    async load() {

        this.data = await loadKnowledge();

        console.log("Knowledge Loaded");

        console.log(this.data);

    }

}