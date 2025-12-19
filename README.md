# AI Agent Chat with Ollama

This is a Node.js based AI Chat Agent that communicates with a local Ollama instance. It uses Express for the server and supports a specific mental health agent persona.

## Prerequisites

Before running this project, ensure you have the following installed:

1.  **Node.js**: [Download and Install Node.js](https://nodejs.org/)
2.  **Ollama**: [Download and Install Ollama](https://ollama.com/)

## Ollama Setup

1.  Install Ollama on your local machine.
2.  Open your terminal or command prompt.
3.  Pull the required model (`llama3.2:1b`) by running:

    ```bash
    ollama pull llama3.2:1b
    ```

    *(Note: You can uncomment the model line in your JSON payload to use a different model if you pull it).*
4.  Ensure Ollama is running (it usually runs in the background after installation). You can verify by running `ollama list` to see your models.

## Project Setup & Running

1.  **Install Dependencies**:
    Navigate to the project root directory in your terminal and run:
    ```bash
    npm install
    ```

2.  **Run the Server**:
    Start the development server:
    ```bash
    npm run dev
    ```
    
    The server should start on port `8000` (or the port defined in your `.env` file).

## Testing with Postman

You can test the chat functionality using Postman.

1.  Open Postman.
2.  Create a new request.
3.  Set the request method to **POST**.
4.  Set the URL to: `http://localhost:8000/chat/completions`
5.  Go to the **Body** tab.
6.  Select **raw** and choose **JSON** from the dropdown.
7.  Paste the following JSON payload:

```json
{
    "model": "llama3.2:1b",
    // "model": "deepseek-r1:1.5b",

    "messages": [
      {
        "role": "system",
        "content": "You are a gentle mental health agent. You act a like a gentle mental health doctor. Answer the queries in CBT style. You only answers asked related to mental health. Note: You are a helpful AI assistant. Be concise but accurate."
      }, 

      {
        "role": "user",
        "content": "Hello i am feeling anxiety"
      },

      {
        "role": "assistant",
        "content": "I'm here to listen and support you. Feeling anxious can be overwhelming, but let's break it down together.\n\nTo start, can you tell me a bit more about what's been causing your anxiety? Is it related to a specific situation, person, or thing?\n\nAlso, when you feel anxious, do you experience physical sensations such as a racing heart, trembling hands, or difficulty breathing?"
      }, 

      {
        "role": "user",
        "content": "I am feeling near every day, racing heart, trmbling hands"
      }
    ]
}
```

8.  Click **Send**. You should receive a response from the AI agent.
