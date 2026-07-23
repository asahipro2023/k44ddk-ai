export async function loadKnowledge() {

    try {

        const response = await fetch("../database/knowledge.json");

        if (!response.ok) {
            throw new Error("Không đọc được knowledge.json");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return [];

    }

}