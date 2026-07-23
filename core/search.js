class SearchEngine {

    constructor(data){

        this.data=data;

    }

    find(keyword){

        keyword=keyword.toLowerCase();

        for(const item of this.data){

            const text=JSON.stringify(item).toLowerCase();

            if(text.includes(keyword)){

                return item;

            }

        }

        return null;

    }

}