

async function testGemini() {
    const GEMINI_API_KEY = "AIzaSyBLWoMqOI7ZPBMpmkRLPG9ij2VSTRHVTcM";
    const MODEL_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    
    let chatHistory = [];
    chatHistory.push({
        "role": "user",
        "parts": [{ "text": "مرحبا" }]
    });

    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
        const data = await res.json();
        const models = data.models ? data.models.map(m => m.name) : data;
        console.log(JSON.stringify(models, null, 2));
    } catch(e) {
        console.error("Error:", e);
    }
}

testGemini();
