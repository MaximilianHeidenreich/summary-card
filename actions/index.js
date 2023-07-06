import express from "express";
/*import { createActions, Inputs } from 'deta-space-actions'
import { Configuration, OpenAIApi } from 'openai-edge'

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || "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",
});
const openai = new OpenAIApi(apiConfig);
const LLM_PREFIX = "Provide a condensed summary of the following text, highlighting its essential points and ideas: ";
*/
const app = express()
app.use(express.json())

/*const actions = createActions();

actions.add({
  name: "summarize_text",
  title: 'Summarize Text',
  input: [
    Inputs("text").String(),
  ],
  card: "basic",
  handler: async input => {

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        promptOrMessages: `${LLM_PREFIX}${input.text}`,
        max_tokens: 554,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1
    });

    const result = await response.json();
    const completion = result.choices[0].message.content
    console.log(completion)

    return {
        result: completion
    }//`res for: ${input.text}::::: ${completion}`;
  }
})*/

/*actions.add({
    name: 'map',
    title: 'Show on Map',
    input: [
      Inputs('city').String().Optional(),
    ],
    card: 'map',
    handler: async event => {
        return {
          city: event.city
        }
    }
})

actions.add({
  name: 'data',
  title: 'Show Message',
  input: [],
  card: 'data',
  handler: async () => {
      return {}
  }
})*/

//app.use(actions.middleware)

app.get("/__space/actions", (req, res) => {
    res.json({
        actions: [
            { name: "summarize_text", title: "Summarize Text", path: "/api/summarize", output: "/" },
        ]
    });
});

app.post("/api/summarize", (req, res) => {
  res.json({ message: 'Hello from the backend Micro!' })
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
