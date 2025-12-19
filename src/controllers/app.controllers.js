import { Ollama } from 'ollama'

const ollamaClient = new Ollama({
    host: process.env.OLLAMA_HOST || 'http://localhost:11434',
});

const generateResponse = async (req, res) => {
    try {
        const { messages, model } = req.body;

        const response = await ollamaClient.chat({
            model: model || process.env.OLLAMA_MODEL,
            messages: messages,
            max_tokens: 200,
        });

        res.status(200).json({
            success: true,
            message: "Response generated successfully!",
            response: response,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const helloWorld = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Hello World!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

export { helloWorld, generateResponse };