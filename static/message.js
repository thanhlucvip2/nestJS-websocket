const socket = io('http://localhost:3000');

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const onSubmit = () => {
  socket.emit('message', { data: message.value });
};

socket.on('message', ({ data }) => {
  handleMessage(data);
});

const handleMessage = (message) => {
  messages.appendChild(buildMessage(message));
};

const buildMessage = (message) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
};
