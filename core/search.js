// =============================
// K44DDK Search Engine
// Version 0.3
// =============================

class SearchEngine {

    constructor(data = []) {
        this.data = data;
    }

    search(keyword) {

        keyword = keyword.toLowerCase().trim();

        return this.data.filter(item => {

            return JSON.stringify(item)
                .toLowerCase()
                .includes(keyword);

        });

    }

}