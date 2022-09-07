const socket = io('http://localhost:3000');

const message = document.getElementById('message');
const messages = document.getElementById('messages');
const nameData = document.getElementById('name-data');

function runScript(e) {
  //See notes about 'which' and 'key'
  if (e.keyCode == 13) {
    onSubmit();
    return false;
  }
}
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
  li.appendChild(document.createTextNode(nameData.value + ' : ' + message));
  return li;
};
