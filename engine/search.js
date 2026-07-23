// =======================================
// K44DDK AI
// Search Engine
// Version 1.1.2
// =======================================

window.K44 = window.K44 || {};

K44.Search = {

    find(question) {

        const keyword = K44.Parser.normalize(question);

        const results = [];

        for (const item of K44.Loader.data) {

            let score = 0;

            // Title
            if (item.title &&
                K44.Parser.normalize(item.title).includes(keyword)) {

                score += 100;
            }

            // Keywords
            if (item.keywords) {

                for (const key of item.keywords) {

                    if (K44.Parser.normalize(key).includes(keyword)) {

                        score += 80;
                    }

                }

            }

            // Tags
            if (item.tags) {

                for (const tag of item.tags) {

                    if (K44.Parser.normalize(tag).includes(keyword)) {

                        score += 60;
                    }

                }

            }

            // Content
            if (item.content &&
                K44.Parser.normalize(item.content).includes(keyword)) {

                score += 20;
            }

            if (score > 0) {

                results.push({
                    score,
                    data: item
                });

            }

        }

        results.sort((a, b) => b.score - a.score);

        return results;

    }

};