// =======================================
// K44DDK AI
// Parser
// Version 1.1.1
// =======================================

window.K44 = window.K44 || {};

K44.Parser = {

    normalize(text) {

        if (!text) return "";

        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt
            .replace(/[^\w\s]/g, "")         // bỏ ký tự đặc biệt
            .replace(/\s+/g, " ")            // bỏ khoảng trắng dư
            .trim();

    }

};