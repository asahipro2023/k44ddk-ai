// =======================================
// K44DDK AI
// Loader
// Version 1.1.0
// =======================================

window.K44 = window.K44 || {};

K44.Loader = {

    data: [],

    async load() {

        try {

            const response = await fetch("../database/knowledge.json");

            if (!response.ok) {

                throw new Error("Cannot load knowledge.json");

            }

            this.data = await response.json();

            console.log(
                "Knowledge Loaded:",
                this.data.length,
                "records"
            );

            return this.data;

        } catch (error) {

            console.error(error);

            this.data = [];

            return [];

        }

    }

};