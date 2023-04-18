const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const server = require("http").createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()


app.use(express.static(path.join(__dirname, 'public')));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

io.on("connection", socket => {
  /*
  socket.on("send_message", async received_message => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": received_message}]
    });
    socket.emit("bot_response", completion.data.choices[0].message.content);
  })
  */
});

server.listen(port, () => {
  console.log(`Pagina rodando com sucesso em localhost:${port}.`)
})