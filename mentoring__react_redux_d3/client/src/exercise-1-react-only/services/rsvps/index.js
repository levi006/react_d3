import { addRsvpsData } from '../store/actions';

export default (store) => {
  const protocol = (location.protocol === 'https:') ? 'wss:' : 'ws:';
  const url = `${protocol}//${location.host}/rsvps`;

  const ws = new WebSocket(url);
  ws.addEventListener('message', (message, flags) => {
    store.dispatch(addRsvpsData(JSON.parse(message.data)));
  });
};
