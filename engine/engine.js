// =======================================
// K44DDK AI
// Engine
// Version 1.1.3
// =======================================

window.K44 = window.K44 || {};

K44.Engine = {

    async init() {

        await K44.Loader.load();

        console.log("K44 Engine Ready");

    },

  ask(question) {

    const results = K44.Search.find(question);

    return K44.Answer.create(results);

}
};