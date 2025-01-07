import { Socket } from 'socket.io-client';
import { Group, Scene, Vector3 } from 'three';
import { createPlayer } from '../objects';

export enum SocketEvents {
  UserCreate = 'user_create', //self
  UserCreated = 'user_created', //other
  UserRemoved = 'user_removed', //other
  UserMove = 'user_move', //self
  UserMoved = 'user_moved', //other
}

interface UserData {
  full_name: string;
  platform: string;
}

interface UserEntry {
  data: UserData;
  object: Group;
  position: Vector3;
}

export class WebSocketEventHandler {
  private scene: Scene;
  private userMap: Record<string, UserEntry> = {};
  private socket: Socket;

  constructor(scene: Scene, socket: Socket) {
    this.scene = scene;
    this.socket = socket;
  }

  public handleUserCreate = async (data: UserData) => {
    this.socket.emit(SocketEvents.UserCreate, data);
  };
  public handleUserMove = (data: UserData, position: Vector3) => {
    this.socket.emit(SocketEvents.UserMove, {
      data,
      position,
    });
  };

  private handleUserCreated = async (data: UserData) => {
    const player = await createPlayer(this.userMap[data.full_name].position);

    if (!this.userMap[data.full_name]) {
      this.userMap[data.full_name] = {
        data,
        position: new Vector3(0, 1),
        object: player,
      };
    }

    this.scene.add(this.userMap[data.full_name].object);
    console.log(data.full_name, 'joined');
  };
  private handleUserRemoved = (data: any) => {
    this.scene.remove(this.userMap[data.name].object);
    console.log(data.name, 'left');
  };
  private handleUserMoved = ({ data, position }: Omit<UserEntry, 'object'>) => {
    if (this.userMap[data.full_name]) {
      const { object } = this.userMap[data.full_name];

      object.position.x = position.x;
      object.position.y = position.y;
      object.position.z = position.z;
    }
  };

  public handleWebSocketEvents = (event: SocketEvents, data: any) => {
    switch (event) {
      //   case SocketEvents.UserCreate:
      //     this.handleUserCreate(data);
      //     return;
      case SocketEvents.UserCreated:
        this.handleUserCreated(data);
        return;
      case SocketEvents.UserRemoved:
        this.handleUserRemoved(data);
        return;
      //   case SocketEvents.UserMove:
      //     this.handleUserMove(data);
      //     return;
      case SocketEvents.UserMoved:
        this.handleUserMoved(data);
        return;
      default:
        return;
    }
  };
}
