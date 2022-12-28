const express = require('express')
const app = express()
const port = 5000;
require('dotenv').config()
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors')
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(bodyParser.json());
app.use(cors());
app.post('/ask-an-ai', async (req, res) => {
//   res.send('Hello World!')
  const {prompt = ''} = req.body;
  const response = await openai.createCompletion({
    model: "text-curie-001",
    prompt,
    temperature: 0.7,
    max_tokens: 222,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: [";"],
  });
  const {choices = []} = response.data
  if (choices.length) {
    return res.json({message: choices[0].text})
  }
  return res.json({message: "I refuse to answer"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("PROCESS ENV", process.env)
})