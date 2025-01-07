import { io } from 'socket.io-client';

export enum SocketEvents {
  UserCreate = 'user_create', //self
  UserCreated = 'user_created', //other
  UserRemoved = 'user_removed', //other
  UserMove = 'user_move', //self
  UserMoved = 'user_moved', //other
}

const url = 'http://localhost:3002/users';

export const socket = io(url);

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on('disconnect', () => {
  console.log('DISCONECTED');
});

socket.onAny(console.log);
