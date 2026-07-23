// =======================================
// K44DDK AI
// Answer Engine
// Version 1.1.4
// =======================================

window.K44 = window.K44 || {};

K44.Answer = {

    create(results) {

        if (!results || results.length === 0) {

            return "Xin lỗi, tôi chưa tìm thấy thông tin phù hợp.";

        }

        const item = results[0].data;

        let text = "";

        text += "👤 " + item.title + "\n\n";

        text += "📝 " + item.content + "\n\n";

        if (item.tags && item.tags.length > 0) {

            text += "🏷️ " + item.tags.join(", ") + "\n\n";

        }

        if (item.author) {

            text += "✍️ " + item.author;

        }

        return text;

    }

};