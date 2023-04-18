var socket = io.connect();
var flow = 0;

class chat {
    constructor(name) {
        this.name = name;
      }
    sendUsername(name) {
        let username = document.createElement("h2");
        username.textContent = this.name;
        document.querySelector(`#messages #chat_${flow}`).appendChild(username);
    }
    sendMessage(message) {
        let text = document.createElement("p");
        text.textContent = message;
        document.querySelector(`#messages #chat_${flow}`).appendChild(text);
        flow += 1;
    }
    createMessage(message) {
        let holder = document.createElement("div");
        holder.id = `chat_${flow}`;
        document.querySelector("#messages").appendChild(holder);
        this.sendUsername(this.name);
        this.sendMessage(message);
    }
}

const person = new chat("Jon");
const bot = new chat("Viviann");

document.querySelector("#entry input").addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        person.createMessage(document.querySelector("#entry input").value);
        socket.emit("send_message", document.querySelector("#entry input").value);
        document.querySelector("#entry input").value = "";
    }
})

socket.on("bot_response", bot_response => {
    bot.createMessage(bot_response);
})