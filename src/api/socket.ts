import { io } from 'socket.io-client';

const url = 'http://localhost:3002/users';

export const socket = io(url);

socket.on('connect', () => {
  console.log('CONNECTED');
});

socket.on('disconnect', () => {
  console.log('DISCONNECTED');
});

socket.onAny(console.log);
